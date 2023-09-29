import axios from "axios";
import { PRODUCT_CATEGORIES } from "../../contance/endPoint";

export interface productCategoriesType {
    id: number;
    title: string;
    item_ids: number[];
    created_at: number;
    updated_at?: number;
}

const getProductCategories = async () => {
    const res = await axios.get(PRODUCT_CATEGORIES);
    const product: productCategoriesType[] = res.data;
    console.log(product);
    
    return product;
};

export default getProductCategories;