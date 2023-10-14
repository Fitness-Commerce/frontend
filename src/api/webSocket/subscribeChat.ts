import { Client } from "@stomp/stompjs";
import socketAuthRefresh from "./socketAuthRefresh";

import { chatMassegesType } from "../chat_api/getChatMessages";

export interface subscribeChatType {
    roomId: string;
    setMessages: (arg: chatMassegesType) => void;
    setIsLoading: (arg: boolean) => void;
}

const subscribeChat = ({
    roomId,
    setMessages,
    setIsLoading,
}: subscribeChatType) => {
    // 인증 리프레시 기능 넣은 웹소켓 클라이언트 생성
    const client = socketAuthRefresh(
        new Client({
            // brokerURL: "ws://localhost:8080/ws",
            brokerURL: "ws://43.200.32.144:8080/ws",
        })
    );

    console.log("구독 요청 / roomId : ", roomId);

    // 웹소켓 연결
    client.onConnect = () => {
        
        // 구독 시작
        client.subscribe(`/sub/chat/room/${roomId}`, (message) => {
            console.log(roomId);
            if (message.body) {
                const chatMessage: chatMassegesType = JSON.parse(message.body);
                setMessages(chatMessage);
            }
        });
        console.log("구독 성공");

        setIsLoading(false);
    };

    client.onStompError = () => {
        console.log("구독 실패");
        setIsLoading(false);
    };

    client.onDisconnect = () => {
        console.log("구독 종료");
        setIsLoading(false);
    };

    client.activate();

    return client;
};

export default subscribeChat;
