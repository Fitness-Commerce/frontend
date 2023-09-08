import { Axios } from "./createPost";

async function createCommunity() {
    const res = await Axios.post(`/api/postCategories`, {title: "테스트 카테고리"});
    const communityId = res.data.id;
    console.log(communityId);
}

export default createCommunity;