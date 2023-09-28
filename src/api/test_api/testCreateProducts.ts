// import createProduct from "../products_api/createProduct";
import product from "../../assets/product1.webp";
import axios from "axios";
import { ITEMS } from "../../contance/endPoint";

const testCreateProducts = async () => {
    const convertToBlob = async () => {
        const response = await fetch(product);
        const blob = await response.blob();
        return new File([blob], "product.png", { type: "multipart/form-data" });
    };

    const image = await convertToBlob();

    try {
        const requestArray = [];
        const formData = new FormData();
        formData.append("itemName", "헬스 용품");
        formData.append("itemDetail", "테스트");
        formData.append("categoryTitle", "용품");
        formData.append("itemPrice", "1000000");
        formData.append("images[0]", image);
        formData.append("images[1]", image);
        formData.append("images[2]", image);

        const instence = axios.create({
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        })
        for (let i = 0; i < 1; i++) {
            requestArray.push(new Promise(() => instence.post(ITEMS, formData)));
        }
        Promise.all(requestArray);
    } catch (err) {
        console.log(err);
    }
};

export default testCreateProducts;
