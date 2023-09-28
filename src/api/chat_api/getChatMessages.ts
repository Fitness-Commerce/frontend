import axios from "axios";
import { MESSAGE } from "../../contance/endPoint";

interface chatMessagesType {
    senderNickname: string,
    message: string,
    created_at: string;
  }

const getChatMessages = async (roomId: string) => {
    try {
        const res = await axios.get(MESSAGE + `/${roomId}`);
        const chatMessages: chatMessagesType[] = res.data;
        return chatMessages;
    } catch (err) {
        console.log(err);
    }
};

export default getChatMessages;
