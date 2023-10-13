import axios from "axios";

async function login() {
    try {
        // const res = await axios.post("/api/auth/login", {
        //     email: "same555@naver.com",
        //     password: "12341234",
        // });
        // const res = await axios.post("/api/auth/login", {
        //     email: "same333@naver.com",
        //     password: "12341234",
        // });
        // const res = await axios.post("/api/auth/login", {
        //     email: "same666@naver.com",
        //     password: "12341234",
        // });
        const res = await axios.post("/api/auth/login", {
            email: "same222@naver.com",
            password: "12341234",
        });
        const accessToken = res.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        console.log(accessToken);
    } catch(err) {
        console.log(err);
    }
}

export default login;
