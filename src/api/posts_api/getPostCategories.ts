import axios from "axios";

export interface IpostCategories {
    id: number;
    title: string;
    post_ids: number[];
    created_at: string;
    updated_at: string;
}

async function getPostCategories() {
    const res = await axios.get(`/api/postCategories`);
    const postCategories: IpostCategories[] = res.data;
    return postCategories;
}

export default getPostCategories;
