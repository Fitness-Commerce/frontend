import axios from "axios";
import { IAxios } from "../Axios";
import { REFRESH_TOKEN } from "../../contance/endPoint";


const refresh = async ({accessToken, setIsLogin}: IAxios) => {
    await axios.get(REFRESH_TOKEN, {
        //config
        headers: {
            // header에 accessToken을 담아 보내준다.
            Authorization: accessToken,
        },
        withCredentials: true, // cookie전송 허용
    })
    .then((res) => {
        console.log('accessToken재발급 성공');
        localStorage.setItem('accessToken', res.data.accessToken);

    }).catch(() => {
        console.log('accessToken재발급 실패 -> 로그아웃 처리');
        setIsLogin(false);
        localStorage.removeItem('accessToken');
        // axios.post(LOGOUT, {}, {
        //     headers: {
        //         Authorization: accessToken,
        //     },
        //     withCredentials: true,
        // })
        // .then(() => {
        //     console.log('로그아웃 요청 성공');
        // }).catch(() => {
        //     console.log('로그아웃 요청 실패');
        // })
    })
}

export default refresh;