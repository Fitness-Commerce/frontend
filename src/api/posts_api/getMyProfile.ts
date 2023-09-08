import { Axios } from "./createPost";

async function getMyProfile() {
    const res  = await Axios.get(`/api/members/myProfile`);
    const MyProfile = res.data;
    console.log(MyProfile);
}

export default getMyProfile;