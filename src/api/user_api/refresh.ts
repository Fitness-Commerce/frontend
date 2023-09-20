import axios from "axios";
import { REFRESH_TOKEN } from "../../contance/endPoint";

const refresh = async () => {
    const res = await axios.get(REFRESH_TOKEN, {
        withCredentials: true,
    });

    localStorage.setItem("accessToken", res.data.accessToken);
};

export default refresh;
