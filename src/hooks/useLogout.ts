import { useSetRecoilState } from "recoil";
import { isLogin } from "../recoil/login/atom";
import axios from "axios";
import { LOGOUT } from "../contance/endPoint";

export const useLogout = () => {
    const setIsLogin = useSetRecoilState(isLogin);
    
    const logout = () => {
        console.log('onClick! logout');
        const accessToken = localStorage.getItem('accessToken');
        
        axios.post(LOGOUT, {}, {
            headers: {
                Authorization: `${accessToken}`,
            },
            withCredentials: true,
            timeout: 10 * 1000,
        })
        .then((response) => {
            // 로그아웃 요청 성공 -> 로그아웃 상태로 변경
            if(response.status === 200) {
                localStorage.removeItem('accessToken');
                setIsLogin(false);
            }
            console.log(response);
            return response;
        })
        .catch((error) => {
            console.error(error);
            return error;
        })
    }
    return logout;
}