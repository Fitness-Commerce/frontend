import { Client } from "@stomp/stompjs";
import socketAuthRefresh from "./socketAuthRefresh";

import { WEBSOCKET } from "../../contance/endPoint";

export interface FirstMessageType {
    roomName: string;
    itemId: number;
    message: string;
    setIsCreated: (arg: boolean) => void;
}

const createChat = async ({
    roomName,
    itemId,
    message,
    setIsCreated,
}: FirstMessageType) => {
    const stompClient = socketAuthRefresh(
        new Client({
            brokerURL: WEBSOCKET,
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
        setTimeout(() => {
            console.log("헬스톡 생성!!");
            setIsCreated(true);
        }, 500);
    };

    // stompClient.onStompError = () => console.log("헬스톡 생성 실패");

    stompClient.activate();
};

export default createChat;
