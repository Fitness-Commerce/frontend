import axios from "axios";
import { ITEMS } from "../../contance/endPoint";

const createProduct = async (formData: FormData) => {
    const res = await axios.post(ITEMS, formData);
    const productId = res.data.id;
    console.log(productId);
    
    return Promise.resolve(productId);
};

export default createProduct;