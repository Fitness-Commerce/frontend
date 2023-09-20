import axios from "axios";

export interface myProfileType {
    member_id: number;
    username: string;
    nickname: string;
    phone_number: string;
    regidence: string;
    area_range: string[];
 }

async function getMyProfile() {
    const res = await axios.get(`/api/members/myProfile`);
    const myProfile: myProfileType = res.data;
    console.log(myProfile);
}

export default getMyProfile;