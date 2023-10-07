import axios from "axios";

async function createCommunity() {
    const res = await axios.post(`/api/postCategories`, {title: "자유"});
    const communityId = res.data.id;
    console.log(communityId);
}

export default createCommunity;