import axios from "axios";

interface Product {
    item_id: number;
    member_id: number;
    item_category_id: number;
    item_name: string;
    item_detail: string;
    item_price: number;
    item_status: string;
    item_images_url: string[];
    item_content: string;
    created_at: string;
    updated_at?: string;
}

// FIXME: 이미지 요청을 위한 임시 비동기 함수
const getProduct = async () => {
    const res = await axios.get("/api/product");
    const product: Product = res.data;
    return product;
};

export default getProduct;
