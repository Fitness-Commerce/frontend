import axios from "axios";
import { ITEMS } from "../../contance/endPoint";
import ProductType from "../../interface/Products";

const getProduct = async (id: string) => {
    const res = await axios.get(ITEMS + `/${id}`);
    const product: ProductType = res.data;
    return product;
};

export default getProduct;
