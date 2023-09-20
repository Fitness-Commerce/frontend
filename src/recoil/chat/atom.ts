import { atom } from "recoil";

export const selectedChatRoomState = atom<string>({
    key: 'selectedChatRoomState',
    default: ""
})

export const selectedItemIdState = atom<number>({
    key: 'selectedItemIdState',
    default: 0
})
