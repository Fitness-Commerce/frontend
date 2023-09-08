import axios from "axios";

async function refresh() {
    try {
        const res = await axios.get(
            "/api/auth/token-refresh",
            { withCredentials: true }
        );
        console.log("refresh success");
        
        localStorage.setItem("accessToken", res.data.accessToken);
    } catch (err) {
        console.log(err);
    }
}

export default refresh;
