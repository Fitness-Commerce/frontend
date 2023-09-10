import axios from "axios";

async function getMemberProfile(id: number) {
    const res = await axios.get(`/api/members/${id}`);
    const profile = res.data;
    console.log(profile);

    return profile;
}

export default getMemberProfile;