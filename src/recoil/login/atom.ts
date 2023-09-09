import { atom } from "recoil";

export const isLogin = atom({
    key: 'isLogin',
    default: localStorage.getItem('accessToken') != null
})