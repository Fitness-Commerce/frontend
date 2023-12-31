import axios from "axios";
import { ITEMS } from "../../contance/endPoint";
import { ProductListType } from "../../interface/Products";
import { filterdOption } from "../../contance/products";


interface IGetProductList {
    page?: number;
    size?: number;
    order?: string;
}

const getProductList = async ({page = 1, size = 10, order = filterdOption[0]}: IGetProductList) => {
    const res = await axios.get(ITEMS + `?page=${page}&size=${size}&order=${order}`);
    const product: ProductListType = res.data;

    console.log(product);
    
    return product;
};

export default getProductList;
