import { Client } from "@stomp/stompjs";
import socketAuthRefresh from "./socketAuthRefresh";
import { Dispatch, SetStateAction } from "react";

export interface ChatMessage {
    nickName: string;
    message: string;
    createdAt: string;
}

export interface subscribeChatType  {
    roomName: string;
    setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const subscribeChat = ({roomName, setMessages, setIsLoading}: subscribeChatType) => {
    // 인증 리프레시 기능 넣은 웹소켓 클라이언트 생성
    const client = socketAuthRefresh(new Client());

    // 웹소켓 연결
    client.configure({
        brokerURL: "ws://43.200.32.144:8080/ws",
        onConnect: () => {
            // 구독 시작
            const subscription = client.subscribe(
                `/sub/chat/room/${roomName}`,
                (message) => {
                    if (message.body) {
                        const chatMessage: ChatMessage = JSON.parse(
                            message.body
                        );
                        setMessages((prevMessages) => [
                            ...prevMessages,
                            chatMessage,
                        ]);
                    }
                }
            );

            setIsLoading(false);

            return () => {
                // 컴포넌트 언마운트시 구독 취소
                subscription.unsubscribe();
            };
        },
    });

    return client;
}

export default subscribeChat;