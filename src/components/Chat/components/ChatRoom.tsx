import { useState, useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Client } from "@stomp/stompjs";

import useAuth from "../../../hooks/useAuth";

import subscribeChat from "../../../api/webSocket/subscribeChat";
import createChat from "../../../api/webSocket/createChat";
import getChatMessages, {
    chatMassegesType,
} from "../../../api/chat_api/getChatMessages";
import getChatList, { chatListType } from "../../../api/chat_api/getChatList";
import { myProfileType } from "../../../api/test_api/getMyProfile";

import * as S from "../styled";
import LoadingSpinner from "../../LoadingSpinner";
import arrowSVG from "../../../assets/guide_arrow.svg";

interface ChatRoomProps {
    itemId: number;
    onGoBackToList: () => void;
}

const ChatRoom = ({ itemId, onGoBackToList }: ChatRoomProps) => {
    const excuteGetChatList = useAuth(getChatList);
    const excuteGetChatMessages = useAuth(getChatMessages);
    const queryClient = useQueryClient();

    // 프로필 가져오기
    const userProfile = queryClient.getQueryData([
        "myProfile",
    ]) as myProfileType;

    // chatList에서 현재 선택된 itemId 있는지 확인, 없으면 새로운 방 생성\
    // const [isCreated, setIsCreated] = useState(false);
    const stompClient = useRef<Client | null>(null);
    const [willCreate, setWillCreate] = useState<boolean | null>(null);
    const roomIdRef = useRef("");
    const {
        data: chatRoomData,
        isLoading: isChatListLoading,
        isError: isChatListError,
        error: chatListError,
    } = useQuery(
        ["chatRoom", itemId],
        () => excuteGetChatList(userProfile.id),
        {
            select: (data) => {
                const found = data.filter(
                    (chatRoom: chatListType) => chatRoom.itemId === itemId
                );

                roomIdRef.current = found[0]?.roomId || "";
                return found[0] || null;
            },
            cacheTime: 0,
        }
    );
    const {
        data: chatMessagesData,
        isLoading: isChatMessagesLoading,
        isError: isChatMessagesError,
        error: chatMessagesError,
    } = useQuery(
        ["chatMessages", itemId],
        () => excuteGetChatMessages(roomIdRef.current),
        { enabled: !isChatListLoading && chatRoomData !== null, cacheTime: 0 }
    );

    const [messages, setMessages] = useState<chatMassegesType[]>([]);
    const messageRef = useRef<HTMLInputElement>(null);

    // stompjs는 연결중일때의 상태를 반환하지 않기때문에 로딩을 직접 구현해줘야 됨
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // 구독 실행 함수
    const subscribe = () => {
        setIsLoading(true);

        const client = subscribeChat({
            roomId: roomIdRef.current,
            setMessages: (message) =>
                setMessages((previousMessage) => [...previousMessage, message]),
            setIsLoading: (bool) => setIsLoading(bool),
        });

        stompClient.current = client;
    };

    // form submit 함수
    const handleOnChatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (willCreate) {
            onCreateChat();
        } else {
            sendMessage();
        }
    };

    // 채팅방 생성
    const onCreateChat = async () => {
        if (messageRef.current) {
            // 채팅방 생성과 동시에 구독주소로 넘겨줄 roomName을 상태값으로 저장
            const roomUUID = self.crypto.randomUUID();
            roomIdRef.current = roomUUID;

            // 채팅방 연결 요청 보내고 바로 닫힘
            await createChat({
                roomName: roomUUID,
                itemId: itemId,
                message: messageRef.current.value,
                setIsCreated: (bool) => {
                    setWillCreate(!bool);
                },
            });

            // 생성한 채팅방에서 정보 리패치
            queryClient.refetchQueries(["chatRoom", itemId]);
        }
    };

    // 메세지 전달
    const sendMessage = () => {
        const createdTime = Date.now().toLocaleString("ko-KR");
        if (stompClient.current && messageRef.current) {
            // 웹소켓으로 메세지 전달
            stompClient.current.publish({
                destination: "/pub/chat/message",
                headers: {
                    Authorization: localStorage.getItem(
                        "accessToken"
                    ) as string,
                },
                body: JSON.stringify({
                    // FIXME: 여기 roomId로 식별하면 깔끔한데... 일단 로컬 서버에는 roomName 응답으로 주도록 수정함
                    roomName: chatRoomData.roomName,
                    message: messageRef.current.value,
                }),
            });

            // setMessages를 입력에서도 해줘야됨
            setMessages((prev) => {
                console.log("현재 메세지 : " + messageRef.current?.value);

                if (messageRef.current) {
                    const messageValue = messageRef.current.value;
                    // 메세지 input 초기화
                    messageRef.current.value = "";
                    return [
                        ...prev,
                        {
                            senderNickname: userProfile.nickname,
                            message: messageValue,
                            created_at: createdTime,
                        },
                    ];
                }
                return prev;
            });
        }
    };

    // 컴포넌트의 채팅방 생성 판별 로직
    useEffect(() => {
        console.log(willCreate);

        // 이미 채팅방 존재하면 구독 시작
        if (willCreate === false) {
            subscribe();
        }

        // 컴포넌트 언마운트시 연결 해제
        return () => {
            if (stompClient.current?.connected) {
                stompClient.current.deactivate();
            }
            console.log("chat room unmount");
        };
    }, [willCreate]);

    useEffect(() => {
        // 채팅방 정보가 갱신되면 null일때 생성,
        if (chatRoomData === null) {
            setWillCreate(true);
        }
        // 참일때 구독 요청을 위해 willCreate를 false,
        // undefined인 경우(에러)가 있어서 else if로 조건 걸어줘야됨
        else if (chatRoomData) {
            setWillCreate(false);
        }
    }, [chatRoomData]);

    // 채팅방 정보가 갱신되어 채팅메세지 요청 -> 채팅방 정보가 없는 경우(새로 생성해야될 때) 걸러줘야되서 조건문 필요
    useEffect(() => {
        if (chatRoomData) {
            // 가져온 채팅메세지는 client state로 관리
            // 이유는 내가 작성하는 메세지를 웹소켓이 갱신해주지 않아서 그때마다 api 요청으로 메세지 기록을 가져올 순 없기 때문
            setMessages(() => [...chatMessagesData]);
        }
    }, [chatMessagesData]);

    if (isLoading || isChatListLoading || isChatMessagesLoading)
        return <LoadingSpinner />;
    if (isChatListError || isChatMessagesError)
        throw chatListError || chatMessagesError;

    return (
        <S.ChatRoom>
            {/* <S.ChatCloseButton
                type="button"
                onClick={() => chatRoomState.onChatClose()}
            >
                <img src={arrowSVG} alt="go back" />
            </S.ChatCloseButton> */}
            <div className="chat-room__header">
                <button
                    type="button"
                    className="chat-room__header__go-back-btn"
                    onClick={onGoBackToList}
                >
                    <img src={arrowSVG} alt="go back guide arrow" />
                </button>
                <span className="chat-room__header__title">
                    {chatRoomData.itemName}
                </span>
            </div>
            <form onSubmit={handleOnChatSubmit}>
                {messages.map(({ message }) => (
                    <p key={self.crypto.randomUUID()}>{message}</p>
                ))}
                <input
                    type="text"
                    ref={messageRef}
                    placeholder="메세지를 입력해주세요"
                />
            </form>
        </S.ChatRoom>
    );
};

export default ChatRoom;
