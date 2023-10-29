import axios from "axios";
import { CHAT } from "../../contance/endPoint";

export interface chatListType {
    roomId: number;
    roomName: string;
    itemId: number;
    itemName: string;
    buyerId: number;
    opponentNickname: string;
    lastMessage: string;
    lastMessageTime: string;
}

const getChatList = async () => {
    try {
        const res = await axios.get(CHAT);
        const chatList: chatListType[] = res.data;
        // console.log(chatList[0].buyerId);
        
        return chatList;
    } catch (err) {
        console.log(err);
        return 
    }
};

export default getChatList;
