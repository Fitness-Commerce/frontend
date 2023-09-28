import { Client } from "@stomp/stompjs";
import socketAuthRefresh from "./socketAuthRefresh";

export interface FirstMessageType {
    roomName: string;
    itemId: number;
    message: string;
    setIsCreated: (arg: boolean) => void;
}

const createChat = ({ roomName, itemId, message, setIsCreated }: FirstMessageType) => {
    const client = socketAuthRefresh(
        new Client({
            brokerURL: "ws://43.200.32.144:8080/ws",
        })
    );

    client.onConnect = () => {
        client.publish({
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
        setTimeout(() => client.deactivate(), 2000);
    };

    client.onDisconnect = () => {
        console.log("헬스톡 생성!!");
        setIsCreated(true);
    };

    client.onStompError = () => console.log("헬스톡 생성 실패");
    
    client.activate();
};

export default createChat;
