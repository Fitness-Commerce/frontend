import { selectorFamily } from "recoil";
import { selectedChatRoomState } from "./atom";

// export const isSelectedChatRoom = selectorFamily({
//     key: 'isSelectedChatRoom',
//     get: () => ({getCallback}) => {
//         const isSelectedChatRoomValue = getCallback(selectedChatRoomState);

//         return !!isSelectedChatRoomValue.roomId || !!isSelectedChatRoomValue.itemId;
//     }
// })