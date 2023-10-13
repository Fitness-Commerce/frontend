import { Client } from "@stomp/stompjs";
import { useEffect } from "react";

const useChatRoomSocket = () => {
    const stompClient = new Client({
        brokerURL: "ws://43.200.32.144:8080/ws", // 여기에 실제 서버 URL을 입력하세요.
        connectHeaders: {
            Authorization: localStorage.getItem("accessToken") as string,
        },
        debug: function (str) {
            console.log(str);
        },
        reconnectDelay: 5000,
    });

    // 연결 성공 시 동작
    stompClient.onConnect = function () {
        console.log("Connected");

        stompClient.publish({
            destination: "/pub/chat/message",
            headers: {
                Authorization: localStorage.getItem("accessToken") as string,
            },
            body: JSON.stringify({
                roomName: "123",
                receiverId: 2,
                message: "hello",
            }),
        });

        // 구독 시작
        stompClient.subscribe("/sub/chat/room/123", function (message) {
            console.log(`Received message: ${message.body}`);

            // 필요에 따라 구독 해지 가능
            // subscription.unsubscribe();
        });
    };

    // 연결 실패 시 동작
    stompClient.onStompError = function (frame) {
        console.log("Broker reported error: " + frame.headers["message"]);
        console.log("Additional details: " + frame.body);
    };

    // 컴포넌트 언마운트시 연결 해제
    useEffect(() => {
        return () => {
            if (stompClient.connected) {
                stompClient.deactivate();
            }
        };
    }, []);

    return stompClient;
};

export default useChatRoomSocket;
