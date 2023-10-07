import axios from "axios";

async function signup() {
    try {
        // const res = await axios.post("/api/members/signup", {
        //     email: "same555@naver.com",
        //     password: "12341234",
        //     phoneNumber: "11122300078",
        //     username: "동건원",
        //     nickname: "won1",
        //     role: "USER",
        //     address: {
        //         front_address: "경기도 성남시 분당구",
        //         detailed_address: "xxx동 xxx아파트 000-000",
        //     },
        //     area_range: ["경기도 용인시 수지구", "경기도 용인시 기흥구"],
        // });
        const res = await axios.post("/api/members/signup", {
            email: "same666@naver.com",
            password: "12341234",
            phoneNumber: "11122300022",
            username: "동건원",
            nickname: "won2",
            role: "USER",
            address: {
                front_address: "경기도 성남시 분당구",
                detailed_address: "xxx동 xxx아파트 000-000",
            },
            area_range: ["경기도 용인시 수지구", "경기도 용인시 기흥구"],
        });
        // const res = await axios.post("/api/members/signup", {
        //     email: "same777@naver.com",
        //     password: "12341234",
        //     phoneNumber: "11122300033",
        //     username: "동건원",
        //     nickname: "won3",
        //     role: "USER",
        //     address: {
        //         front_address: "경기도 성남시 분당구",
        //         detailed_address: "xxx동 xxx아파트 000-000",
        //     },
        //     area_range: ["경기도 용인시 수지구", "경기도 용인시 기흥구"],
        // });
        console.log("회원가입 성공: ", res.data);
    } catch(err) {
        console.log(err);
        
    }
}

export default signup;
