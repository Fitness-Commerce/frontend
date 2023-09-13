import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useSetRecoilState } from "recoil";
import { isLogin } from "../recoil/login/atom";

import { REFRESH_TOKEN, LOGOUT } from "../contance/endPoint";

// export type ExecuteRequest = (...args: any) => Promise<any>

const useAuth = (requestFunction) => {
    const setIsLogin = useSetRecoilState(isLogin);
    const navigate = useNavigate();

    const executeRequest = async (...args) => {
        // 인증 인터셉터 설정
        const requestInterceptorId = axios.interceptors.request.use(
            (config) => {
                config.headers.Authorization =
                    localStorage.getItem("accessToken");
                return config;
            },
            (err) => {
                return Promise.reject(err);
            }
        );

        try {
            // 기존 함수에 executeRequest로 받은 인자를 넣고 실행
            const response = await requestFunction(...args);

            // 로그인 상태 유지
            setIsLogin(true);

            return response;
        } catch (err) {
            if (
                axios.isAxiosError(err) &&
                err.response &&
                err.response.status === 401
                ) {
                try {
                    // 인증 실패시 refreshToken으로 재요청
                    const res = await axios.get(REFRESH_TOKEN, {
                        withCredentials: true,
                    });
                    
                    localStorage.setItem("accessToken", res.data.accessToken);
                    
                    // 재발급받은 인증 토큰으로 원래 실행중이었던 비동기 요청 재실행
                    return executeRequest(...args);
                } catch (refreshErr) {
                    console.error(refreshErr);
                    
                    // 모든 과정을 실패시 로그아웃 처리
                    setIsLogin(false);

                    // 메인화면으로 이동
                    navigate("/");
                    return;
                }
            }
            // 로그아웃 버튼 클릭시 err가 throw되고 해당 에러의 name이 LOGOUT
            else if (err.name === "LOGOUT") {
                try {
                    await axios.post(LOGOUT, {}, { withCredentials: true });
                    localStorage.removeItem('accessToken');
                    setIsLogin(false);
                    alert("정상적으로 로그아웃 처리되었습니다");
                    navigate("/")
                } catch (logoutErr) {
                    console.log(logoutErr);
                }
                return;
            }
            // 위의 에러 헨들링에 없는 케이스는 에러를 출력
            console.error(err);
        } finally {
            // 이후 비인증 요청의 정상작동을 위해 인증 인터셉터 삭제
            axios.interceptors.request.eject(requestInterceptorId);
        }
    };

    return executeRequest;
};

export default useAuth;
