import { Client } from "@stomp/stompjs";
import socketAuthRefresh from "./socketAuthRefresh";

export interface FirstMessageType {
    roomName: string;
    itemId: number;
    message: string;
    setIsCreated: (arg: boolean) => void
}

const createChat = async ({ roomName, itemId, message, setIsCreated }: FirstMessageType) => {
    const stompClient = socketAuthRefresh(
        new Client({
            // brokerURL: "ws://localhost:8080/ws",
            brokerURL: "ws://43.200.32.144:8080/ws",
        })
    );

    stompClient.onConnect = async () => {
        stompClient.publish({
            destination: "/pub/chat/enter",
            headers: {
                Authorization: localStorage.getItem("accessToken") as string,
            },
            body: JSON.stringify({
                roomName: roomName,
                itemId: itemId,
                message: message,
            }),
        });

        console.log("헬스톡 생성중...");
        await stompClient.deactivate();
    };

    stompClient.onDisconnect = () => {
        console.log("헬스톡 생성!!");
        setIsCreated(true);
    };

    stompClient.onStompError = () => console.log("헬스톡 생성 실패");
    
    stompClient.activate();
};

export default createChat;
