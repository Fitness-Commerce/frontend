import { useSetRecoilState } from "recoil"
import { isLogin } from "../recoil/login/atom"
import { Axios } from "../api/Axios";

export const useAxios = () => {
    const setIsLogin = useSetRecoilState(isLogin);
    const accessToken = localStorage.getItem('accessToken');

    const request = Axios({accessToken, setIsLogin});
    
    return request;
}