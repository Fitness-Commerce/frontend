import axios from "axios";

async function getMyProfile() {
    const res = await axios.get(`/api/members/myProfile`);
    const MyProfile = res.data;
    console.log(MyProfile);
}

export default getMyProfile;