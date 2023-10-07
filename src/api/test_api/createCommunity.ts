import axios from "axios";

async function createCommunity() {
    const res1 = await axios.post(`/api/postCategories`, {
        title: "자유게시판",
    });
    const res2 = await axios.post(`/api/postCategories`, { title: "비만" });
    const res3 = await axios.post(`/api/postCategories`, { title: "멸치" });
    const res4 = await axios.post(`/api/postCategories`, {
        title: "식단 공유",
    });
    const res5 = await axios.post(`/api/postCategories`, {
        title: "운동 노하우",
    });

    const communityId = [
        `자유게시판 : ${res1.data.id}`,
        `비만 : ${res2.data.id}`,
        `멸치 : ${res3.data.id}`,
        `식단 공유 : ${res4.data.id}`,
        `운동 노하우 : ${res5.data.id}`,
    ];
    console.log(communityId);
}

export default createCommunity;
