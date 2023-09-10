import axios from "axios";
import refresh from "./token/refresh";
import { SetterOrUpdater } from "recoil";

export interface IAxios {
    setIsLogin: SetterOrUpdater<boolean>
    accessToken: string | null;
}

export const Axios = ({accessToken, setIsLogin}: IAxios) => {
    // axios instance 생성
    const instance = axios.create({
        baseURL: "",
        headers: {
            Authorization: accessToken,
        },
        withCredentials: true,
        timeout: 10 * 1000,
    });

    // instance의 interceptors 구성
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            if(error.response.status !== null) {
                switch (error.response.status) {
                    case 401:
                        console.log('유효하지 않은 토큰 전송됨 -> accessToken 재발급 시도중');
                        await refresh({accessToken, setIsLogin});
                        
                        // 재 발급 후 기존 요청 재시도
                        // eslint-disable-next-line no-case-declarations
                        const originRequest = error.config;
                        originRequest.headers.Authorization = localStorage.getItem('accessToken');
                        return instance(originRequest);
                    case 500:
                        console.log('현재 알 수 없는 에러');
                        break;
                    default:
                        return error;
                }
            }
            return Promise.reject(error);
        }
    );

    return instance;
};