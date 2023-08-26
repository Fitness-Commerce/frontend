import { atom } from "recoil";

export const rangeListAtom = atom<string[]>({
    key: "rangeListAtom",
    default: [],
})