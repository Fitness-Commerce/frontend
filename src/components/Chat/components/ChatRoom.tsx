import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Client } from "@stomp/stompjs";

import useAuth from "../../../hooks/useAuth";
import useChatRoomState from "../../../hooks/useChatRoomState";

import subscribeChat, {
    ChatMessage,
} from "../../../api/webSocket/subscribeChat";
import createChat from "../../../api/webSocket/createChat";
import { myProfileType } from "../../../api/test_api/getMyProfile";
import getChatMessages from "../../../api/chat_api/getChatMessages";

import * as S from "../styled";
import LoadingSpinner from "../../LoadingSpinner";

interface ChatRoomProps {
    userProfile: myProfileType;
    willCreate: boolean;
}

const ChatRoom = ({ userProfile, willCreate }: ChatRoomProps) => {
    const { isChatRoomSelected, selectedChatRoomId, selectedItemId } =
        useChatRoomState();
    const excuteGetChatMessages = useAuth(getChatMessages);
    const [isCreated, setIsCreated] = useState<boolean>(!willCreate);
    const {
        data: chatMessages,
        isError,
        isLoading: isMessagesLoading,
        error,
    } = useQuery(
        ["chatMessages"],
        () => excuteGetChatMessages(selectedChatRoomId),
        {
            enabled: isChatRoomSelected,
        }
    );
    const [stompClient, setStompClient] = useState<Client | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const messageRef = useRef<HTMLInputElement>(null);
<<<<<<< Updated upstream
    const lastMessageOwner = useRef(null);
=======
    const lastMessageOwner = useRef(
        chatMessages.at(-1)?.senderNickname || null
    );
>>>>>>> Stashed changes

    // stompjs는 연결중일때의 상태를 반환하지 않기때문에 로딩을 직접 구현해줘야 됨
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const setCurrentMessage = () => {
        const createdTime = Date.now().toLocaleString("ko-KR");
        if (messageRef.current) {
            const message = messageRef.current.value;
            setMessages((prev) => {
                return message
                    ? [
                          ...prev,
                          {
                              nickName: userProfile.nickname,
                              message: message,
                              createdAt: createdTime,
                          },
                      ]
                    : prev;
            });
            // input 초기화
            messageRef.current.value = "";
        }
    };

    const handleOnCreateChat = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (messageRef.current) {
            // 채팅방 연결 요청 보내고 바로 닫힘
            createChat({
                roomName: self.crypto.randomUUID(),
                itemId: selectedItemId,
                message: messageRef.current.value,
                setIsCreated: (confirm) => setIsCreated(confirm),
            });

            // 이후 현재 보내진 메세지 표시
            setCurrentMessage();
        }
    };

    const handleOnSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (stompClient && messageRef.current) {
            stompClient.publish({
                destination: "/pub/chat/message",
                body: JSON.stringify({
                    roomName: selectedChatRoomId,
                    message: messageRef.current.value,
                }),
            });

            // setMessages를 입력에서도 해줘야됨
            setCurrentMessage();
        }
    };

    // 채팅방 초기화
    useEffect(() => {
        if (isCreated) {
<<<<<<< Updated upstream
            // messages 상태값의 초기값으로 chatMessages를 바로 할당하면 비동기 요청시 []로 할당되고 끝나버림
=======
>>>>>>> Stashed changes
            setMessages(chatMessages || []);
            const client = subscribeChat({
                roomName: selectedChatRoomId,
                setMessages: (newMessage) => {
                    setMessages((prev) => [...prev, newMessage]);
                },
                setIsLoading: (confirm) => setIsLoading(confirm),
            });

            setStompClient(client);
        }

        // 컴포넌트 언마운트시 연결 해제
        return () => {
            if (stompClient?.connected) {
                stompClient.deactivate();
            }
        };
    }, [isCreated]);

    useEffect(() => {
        if (chatMessages.at(-1)) {
            lastMessageOwner.current = chatMessages.at(-1)?.senderNickname;
        }
    }, [chatMessages]);

    if (isLoading || isMessagesLoading) return <LoadingSpinner />;
    // if (isMessagesLoading) return <LoadingSpinner />;
    if (isError) throw error;

    return (
        <S.ChatRoom
            onSubmit={!isCreated ? handleOnCreateChat : handleOnSendMessage}
        >
            {messages.length > 0 &&
                messages.map(({ nickName, message, createdAt }) => {
<<<<<<< Updated upstream
                    const isCurrentUser = nickName === lastMessageOwner.current;
                    const isUser = nickName === userProfile.nickname;
                    return (
                        <S.MessageContainer key={createdAt} $isUser={isUser}>
=======
                    let isCurrentUser = true;
                    if(lastMessageOwner.current !== nickName) {
                        lastMessageOwner.current = nickName;
                        isCurrentUser = false;
                    }
                    return (
                        <S.MessageContainer
                            key={createdAt}
                            $isUser={isCurrentUser}
                        >
>>>>>>> Stashed changes
                            {isCurrentUser && <span>{nickName}</span>}
                            <S.Message>{message}</S.Message>
                        </S.MessageContainer>
                    );
                })}
            <input
                type="text"
                ref={messageRef}
                placeholder="메세지를 입력해주세요"
            />
        </S.ChatRoom>
    );
};

export default ChatRoom;
