import axios from "axios";
import { DASHBOARD_PRODUCT } from "../../contance/endPoint";

const getDashboardProduct = async () => {
    try {
        const res = await axios.get(DASHBOARD_PRODUCT);
        const dashboardProduct = res.data;
        
        return dashboardProduct;
    } catch (err) {
        console.error(err);
        return;
    }
};

export default getDashboardProduct;