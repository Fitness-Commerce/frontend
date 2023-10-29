import axios from "axios";
import { DASHBOARD_POST } from "../../contance/endPoint";

const getDashboardPost = async () => {
    try {
        const res = await axios.get(DASHBOARD_POST);
        const dashboardPost = res.data;
        
        return dashboardPost;
    } catch (err) {
        console.error(err);
        return;
    }
};

export default getDashboardPost;