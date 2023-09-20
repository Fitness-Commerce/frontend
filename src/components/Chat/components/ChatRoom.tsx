import { useState, useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";

import useChatRoomState from "../../../hooks/useChatRoomState";

import subscribeChat, {
    ChatMessage,
} from "../../../api/webSocket/subscribeChat";
import createChat from "../../../api/webSocket/createChat";
import { myProfileType } from "../../../api/test_api/getMyProfile";

import * as S from "../styled";
import LoadingSpinner from "../../LoadingSpinner";

interface ChatRoomProps {
    userProfile: myProfileType;
    willCreate: boolean;
}

const ChatRoom = ({ userProfile, willCreate }: ChatRoomProps) => {
    const { selectedChatRoomId, selectedItemId } = useChatRoomState();
    const [isCreated, setIsCreated] = useState<boolean>(!willCreate);
    const [stompClient, setStompClient] = useState<Client | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const messageRef = useRef<HTMLInputElement>(null);

    // stompjs는 연결중일때의 상태를 반환하지 않기때문에 로딩을 직접 구현해줘야 됨
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleOnCreateChat = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (messageRef.current) {
            // 채팅방 연결 요청 보내고 바로 닫힘
            createChat({
                roomName: selectedChatRoomId,
                itemId: selectedItemId,
                message: messageRef.current.value,
                setIsCreated: setIsCreated,
            });
        }
    };

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const createdTime = Date.now().toLocaleString("ko-KR");
        if (stompClient && messageRef.current) {
            stompClient.publish({
                destination: "/pub/chat/message",
                body: JSON.stringify({
                    roomName: selectedChatRoomId,
                    message: messageRef.current.value,
                }),
            });

            // setMessages를 입력에서도 해줘야됨
            setMessages((prev) => {
                return messageRef.current
                    ? [
                          ...prev,
                          {
                              nickName: userProfile.nickname,
                              message: messageRef.current.value,
                              createdAt: createdTime,
                          },
                      ]
                    : prev;
            });

            // input 초기화
            messageRef.current.value = "";
        }
    };

    useEffect(() => {
        if (isCreated) {
            const client = subscribeChat({
                roomName: selectedChatRoomId,
                setMessages: setMessages,
                setIsLoading: setIsLoading,
            });

            setStompClient(client);

            stompClient?.activate();
        }

        // 컴포넌트 언마운트시 연결 해제
        return () => {
            if (stompClient?.connected) {
                stompClient.deactivate();
            }
        };
    }, [isCreated]);

    if (isLoading) return <LoadingSpinner />;
    return (
        <S.ChatRoom>
            <form onSubmit={!isCreated ? handleOnCreateChat : sendMessage}>
                {messages.map(({ message }) => (
                    <p>{message}</p>
                ))}
                <input type="text" ref={messageRef} placeholder="메세지를 입력해주세요"/>
            </form>
        </S.ChatRoom>
    );
};

export default ChatRoom;
