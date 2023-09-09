import axios from "axios";

async function logout() {
    try {
        console.log("로그아웃 중...");

        await axios.post(
            "/api/auth/logout",
            {},
            {
                headers: {
                    Authorization: `${localStorage.getItem("accessToken")}`,
                },
                withCredentials: true,
            }
        );
        localStorage.removeItem("accessToken");
        console.log("로그아웃");
    } catch (err) {
        console.log(err);
    }
}

export default logout;
