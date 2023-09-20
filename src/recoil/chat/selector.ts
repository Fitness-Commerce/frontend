import { selector } from "recoil";
import { selectedChatRoomState } from "./atom";

export const isSelectedChatRoom = selector<boolean>({
    key: 'isSelectedChatRoom',
    get: ({get}) => {
        const isSelectedChatRoom = get(selectedChatRoomState);

        return !!isSelectedChatRoom;
    }
})