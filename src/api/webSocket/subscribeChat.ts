import { Client } from "@stomp/stompjs";
import socketAuthRefresh from "./socketAuthRefresh";

export interface ChatMessage {
    nickName: string;
    message: string;
    createdAt: string;
}

export interface subscribeChatType {
    roomName: string;
    setMessages: (arg: ChatMessage) => void;
    setIsLoading: (arg: boolean) => void;
}

const subscribeChat = ({ roomName, setMessages, setIsLoading }: subscribeChatType) => {
    // 인증 리프레시 기능 넣은 웹소켓 클라이언트 생성
    const client = socketAuthRefresh(
        new Client({
            brokerURL: "ws://43.200.32.144:8080/ws",
        })
    );

    // 채팅창 구독
    client.onConnect = () => {
        client.subscribe(`/sub/chat/room/${roomName}`, (message) => {
            if (message.body) {
                const chatMessage: ChatMessage = JSON.parse(message.body);
                setMessages(chatMessage);
            }
            console.log();
        });
        console.log("구독 시작!!");
        setIsLoading(false);
    };

    client.activate();

    return client;
};

export default subscribeChat;
