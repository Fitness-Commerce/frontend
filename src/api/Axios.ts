import axios from "axios";
import { refresh } from "./token/refresh";
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
            Authorization: `${accessToken}`,
        },
        withCredentials: true,
        timeout: 10 * 1000,
    });

    // instance의 interceptors 구성
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if(error.response.status === 401) {
                // 해당 block은 accessToken의 만료기간이 끝났음을 의미
                // refreshToken을 이용해 accessToken재발급 시도
                return refresh({accessToken, setIsLogin});
            }

            return error;
        }
    );

    return instance;
};