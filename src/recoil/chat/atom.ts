import { atomFamily } from "recoil";

// interface selectedChatRoomStateType {
//     roomId: string;
//     itemId: number;
// }

export const selectedChatRoomState = atomFamily({
    key: 'chatRoomState',
    default: { roomId: '', itemId: 0 },
})