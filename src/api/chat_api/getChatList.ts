import axios from "axios";
import { CHAT } from "../../contance/endPoint";

export interface chatListType {
    roomId: number;
    itemId: number;
    itemName: string;
    opponentNickname: string;
    lastMessage: string;
    lastMessageTime: string;
}

const getChatList = async () => {
    try {
        const res = await axios.get(CHAT);
        const chatList: chatListType[] = res.data;
        return chatList;
    } catch (err) {
        console.log(err);
        return 
    }
};

export default getChatList;
