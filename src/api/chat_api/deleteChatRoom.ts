import axios from "axios";
import { CHAT } from "../../contance/endPoint";

const deleteChatRoom = async (roomId: string) => {
    await axios.delete(CHAT.slice(0,CHAT.length-1) + `/${roomId}`);
};

export default deleteChatRoom;
