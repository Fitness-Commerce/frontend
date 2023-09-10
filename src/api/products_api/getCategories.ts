import axios from "axios";
import { CATEGORIES } from "../../contance/endPoint";
import categoriesType from "../../interface/Categories";

const getCategories = async () => {
    const res = await axios.get(CATEGORIES);
    const product: categoriesType[] = res.data;
    console.log(product);
    
    return product;
};

export default getCategories;