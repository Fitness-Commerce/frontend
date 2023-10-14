import axios from "axios";
import { ITEMS } from "../../contance/endPoint";

const deleteProduct = async (id: number) => {
    const res = await axios.delete(ITEMS + `/${id}`);
    console.log(res);
};

export default deleteProduct;