import axios from "axios";
import { CHAT } from "../../contance/endPoint";

export interface chatMassegesType {
    senderNickname: string;
    message: string;
    created_at: string;
}

const getChatMessages = async (roomId: string) => {
    const res = await axios.get(CHAT.slice(0,CHAT.length-1) + `/${roomId}`);
    const chatMasseges: chatMassegesType[] = res.data;
    return chatMasseges;
};

export default getChatMessages;
