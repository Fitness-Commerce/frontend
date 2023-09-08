import { Axios } from "./createPost";

async function logout() {
    try {
        console.log("로그아웃 중...");
        
        await Axios.post("/api/auth/logout");
        localStorage.removeItem("accessToken");
        console.log("로그아웃");
    } catch(err) {
        console.log(err);
        
    }
}

export default logout;