import axios from "axios";
import { PRODUCT_CATEGORIES } from "../../contance/endPoint";
import { ProductListType } from "../../interface/Products";
import { filterdOption } from "../../contance/products";

interface IgetCategoryItems {
    id: string;
    page?: number;
    size?: number;
    order?: string;
    search?: string | null;
}

const getCategoryItems = async ({id, page = 1, size = 10, order = filterdOption[0]}: IgetCategoryItems) => {
    const res = await axios.get(PRODUCT_CATEGORIES + `/${id}/items?page=${page}&size=${size}&order=${order}`);
    const Items: ProductListType = res.data;
    return Items;
};

export default getCategoryItems;
