import axios from "axios";
import { ITEMS_UPDATE } from "../../contance/endPoint";

interface updateStatusProps {
    itemId: number;
    itemStatus: string;
    buyerId: number;
}

const updateStatus = async (props: updateStatusProps) => {
    try {
        const res = await axios.put(ITEMS_UPDATE, props);
        return res.status;
    } catch(err) {
        console.error(err);
    }
}

export default updateStatus;