import axios from "axios";
import { IAxios } from "../Axios";
import { LOGOUT, REFRESH_TOKEN } from "../../contance/endPoint";


export const refresh = async ({accessToken, setIsLogin}: IAxios) => {
    await axios.get(
        REFRESH_TOKEN,
        {withCredentials: true},
    )
    .then((response) => {
        console.log('refresh success!');
        localStorage.setItem('accessToken', response.data.accessToken);
    })
    .catch(() => {
        // 만약 refreshToken으로 accessToken을 갱신하는데 실패하면
        // refreshToken의 만료기간이 끝났음을 의미 로그아웃 처리해준다.
        // 로그아웃 엔드포인트 요청
        axios.post(LOGOUT, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
            timeout: 10 * 1000,
        })
        .then((response) => {
            // 로그아웃 요청 성공 -> 로그아웃 상태로 변경
            if(response.status === 200) {
                setIsLogin(false);
            }
        })
        .catch((error) => {
            return error;
        })
    })
}