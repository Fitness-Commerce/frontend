import axios from "axios";
import { ITEMS } from "../../contance/endPoint";
import { ProductListType } from "../../interface/Products";

const getProductList = async () => {
    const instance = axios.create({
        headers: {
            Authorization: undefined,
        },
    });

    // 전체조회
    const res = await instance.get(ITEMS + `?page=1&size=10&order=id_DESC`);
    const product: ProductListType = res.data;

    console.log(product);
    
    return product;
};

export default getProductList;
