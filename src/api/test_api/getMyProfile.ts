import axios from "axios";

export interface myProfileType {
    "id": number,
    "email": string,
    "username": string,
    "nickname": string,
    "phoneNumber": string,
    "address": {
      "front_address": string,
      "detailed_address": string
    },
    "role": string,
    "area_range": string[],
    "created_at": string,
    "updated_at": string
  }

async function getMyProfile() {
    const res = await axios.get(`/api/members/myProfile`);
    const myProfile: myProfileType = res.data;
    console.log(myProfile);
    return myProfile;
}

export default getMyProfile;