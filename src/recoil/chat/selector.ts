import { selector } from "recoil";
import { selectedChatRoomState, selectedItemIdState } from "./atom";

export const isChatRoomSelector = selector<boolean>({
    key: 'isChatRoomSelected',
    get: ({get}) => {
        const selectedChatRoom = get(selectedChatRoomState);
        const isSelectedChatRoom = !!selectedChatRoom;

        return isSelectedChatRoom;
    }
})

export const isItemSelector = selector<boolean>({
    key: 'isItemSelected',
    get: ({get}) => {
        const selectedItemId = get(selectedItemIdState);
        const isSelectedChatRoom = !!selectedItemId;

        return isSelectedChatRoom;
    }
})
