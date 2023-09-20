import { Dispatch, SetStateAction } from "react";
import { Client } from "@stomp/stompjs";
import socketAuthRefresh from "./socketAuthRefresh";

export interface FirstMessageType {
    roomName: string;
    itemId: number;
    message: string;
    setIsCreated: Dispatch<SetStateAction<boolean>>
}

const createChat = ({ roomName, itemId, message, setIsCreated }: FirstMessageType) => {
    const stompClient = socketAuthRefresh(
        new Client({
            brokerURL: "ws://43.200.32.144:8080/ws",
        })
    );

    stompClient.onConnect = () => {
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
        stompClient.deactivate();
    };

    stompClient.onDisconnect = () => {
        console.log("헬스톡 생성!!");
        setIsCreated(true);
    };

    stompClient.onStompError = () => console.log("헬스톡 생성 실패");
    
    stompClient.activate();
};

export default createChat;
