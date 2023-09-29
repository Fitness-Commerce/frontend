import axios from "axios";
import { PRODUCT_CATEGORIES } from "../../contance/endPoint";

// FIXME: 더미데이터
import { dummyCategories } from "../../../dummy";

 const promises = async (category: string) => {
    await axios.post(PRODUCT_CATEGORIES, {title: category})
}

async function createProductsCategory() {
    const res = Promise.all(dummyCategories.map((category) => promises(category)));
    const communityId = res;
    console.log(communityId);
}

export default createProductsCategory;