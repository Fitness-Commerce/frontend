import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Client } from "@stomp/stompjs";

import useAuth from "../../../hooks/useAuth";

import subscribeChat from "../../../api/webSocket/subscribeChat";
import createChat from "../../../api/webSocket/createChat";
import getChatMessages, {
    chatMassegesType,
} from "../../../api/chat_api/getChatMessages";
import getChatList, { chatListType } from "../../../api/chat_api/getChatList";
import getMyProfile from "../../../api/test_api/getMyProfile";

import pastTimeCalculator from "../../../util/pastTimeCalculator";

import * as S from "../styled";
import LoadingSpinner from "../../LoadingSpinner";
import ArrowSVG from "../../../assets/guide_arrow.svg?react";
import SendSVG from "../../../assets/send_message.svg?react";

interface ChatRoomProps {
    itemId: number;
    onGoBackToList: () => void;
}

const ChatRoom = ({ itemId, onGoBackToList }: ChatRoomProps) => {
    const excuteGetMyProfile = useAuth(getMyProfile);
    const excuteGetChatList = useAuth(getChatList);
    const excuteGetChatMessages = useAuth(getChatMessages);

    // 프로필 가져오기
    const userProfile = useQuery(["chatMyProfile"], excuteGetMyProfile);

    // chatList에서 현재 선택된 itemId 있는지 확인, 없으면 새로운 방 생성
    const stompClient = useRef<Client | null>(null);
    const [willCreate, setWillCreate] = useState<boolean | null>(null);
    const roomIdRef = useRef("");
    const chatRoomData = useQuery(
        ["chatRoom", itemId],
        () => excuteGetChatList(userProfile.data.id),
        {
            enabled: userProfile.isSuccess,
            select: (data) => {
                const found = data.filter(
                    (chatRoom: chatListType) => chatRoom.itemId === itemId
                );

                roomIdRef.current = found[0]?.roomId || "";
                return found[0] || null;
            },
            staleTime: Infinity,
            cacheTime: 0,
        }
    );
    const chatMessagesData = useQuery(
        ["chatMessages", itemId],
        () => excuteGetChatMessages(roomIdRef.current),
        {
            enabled: !chatRoomData.isLoading && chatRoomData.data != null,
            cacheTime: 0,
        }
    );

    const [messages, setMessages] = useState<chatMassegesType[]>([]);
    const messageRef = useRef<HTMLInputElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

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

            setIsLoading(true);
            // 채팅방 연결 요청 보내고 바로 닫힘
            await createChat({
                roomName: roomUUID,
                itemId: itemId,
                message: messageRef.current.value,
                setIsCreated: (bool) => {
                    setIsLoading(false);
                    setWillCreate(!bool);

                    // 생성한 채팅방에서 정보 리패치
                    chatRoomData.refetch();
                },
            });
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
                    roomName: chatRoomData.data.roomName,
                    message: messageRef.current.value,
                }),
            });

            // setMessages를 입력에서도 해줘야됨
            setMessages((prev) => {
                if (messageRef.current) {
                    const messageValue = messageRef.current.value;
                    // 메세지 input 초기화
                    messageRef.current.value = "";
                    return [
                        ...prev,
                        {
                            senderNickname: userProfile.data.nickname,
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
        // 이미 채팅방 존재하면 구독 시작
        if (willCreate === false) {
            subscribe();
        }

        // 컴포넌트 언마운트시 연결 해제
        return () => {
            if (stompClient.current?.connected) {
                stompClient.current.deactivate();
            }
        };
    }, [willCreate]);

    useEffect(() => {
        // 채팅방 정보가 갱신되면 null일때 생성,
        if (chatRoomData.data === null) {
            setWillCreate(true);
        }
        // 참일때 구독 요청을 위해 willCreate를 false,
        // undefined인 경우(에러)가 있어서 else if로 조건 걸어줘야됨
        else if (chatRoomData.data) {
            setWillCreate(false);
        }
    }, [chatRoomData]);

    // 채팅방 정보가 갱신되어 채팅메세지 요청 -> 채팅방 정보가 없는 경우(새로 생성해야될 때) 걸러줘야되서 조건문 필요
    useEffect(() => {
        if (chatRoomData.data) {
            // 가져온 채팅메세지는 client state로 관리
            // 이유는 내가 작성하는 메세지를 웹소켓이 갱신해주지 않아서 그때마다 api 요청으로 메세지 기록을 가져올 순 없기 때문
            setMessages(() => [...chatMessagesData.data]);
        }
    }, [chatMessagesData.data]);

    // 채팅 메세지 추가시 스크롤 자동으로 아래로 내림
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    if (
        isLoading ||
        userProfile.isLoading ||
        chatRoomData.isLoading ||
        (chatMessagesData.isLoading)
    )
        return <LoadingSpinner />;

    if (userProfile.isError || chatRoomData.isError || chatMessagesData.isError)
        throw userProfile.error || chatRoomData.error || chatMessagesData.error;

    return (
        <S.ChatRoom>
            <S.ChatRoomHeader>
                <ArrowSVG
                    className="chat-room__go-back-btn"
                    onClick={onGoBackToList}
                />
                <span className="chat-room__title">
                    {chatRoomData.data?.itemName ||
                        "메세지를 입력하여 채팅을 시작하세요!"}
                </span>
            </S.ChatRoomHeader>
            <S.ChatMessageContainer>
                {messages.map(
                    ({ message, senderNickname, created_at }, index) => {
                        const priviousMessageTime = messages[index - 1]
                            ? pastTimeCalculator(messages[index - 1].created_at)
                            : null;
                        const currentMessageTime =
                            pastTimeCalculator(created_at);
                        return (
                            <S.ChatMessage
                                key={self.crypto.randomUUID()}
                                $isUser={senderNickname.startsWith(
                                    userProfile.data.nickname
                                )}
                            >
                                <p className="chat-message__message-box">
                                    {message}
                                </p>
                                <span className="chat-message__create-at">
                                    {priviousMessageTime == currentMessageTime
                                        ? ""
                                        : currentMessageTime}
                                </span>
                            </S.ChatMessage>
                        );
                    }
                )}
                <div ref={messagesEndRef} />
            </S.ChatMessageContainer>
            <S.ChatForm onSubmit={handleOnChatSubmit}>
                <input
                    className="chat-form__input"
                    type="text"
                    ref={messageRef}
                    placeholder="메세지 보내기..."
                />
                <button className="chat-form__btn" type="submit">
                    <SendSVG
                        width="30"
                        height="30"
                        className="chat-form__btn__send-icon"
                    />
                </button>
            </S.ChatForm>
        </S.ChatRoom>
    );
};

export default ChatRoom;
