import { Client } from "@stomp/stompjs";
import refresh from "../user_api/refresh";

const socketAuthRefresh = (stompClient: Client) => {
    stompClient.onStompError = async (frame) => {
        const headers = frame.headers;

        if (headers["message"] === "401") {
            // 401 에러 발생시 재인증 요청
            try {
                // 재인증 요청
                await refresh();

                // 인증 성공시 웹소켓 재연결
                stompClient.activate();
            } catch (error) {
                console.error("소켓 연동중 재인증 실패:", error);
            }
        }
    };

    return stompClient;
}

export default socketAuthRefresh;