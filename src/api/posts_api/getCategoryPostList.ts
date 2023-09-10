import axios from "axios";

async function getCategoryPostList(id: string, page: number, size: number) {
    const res  = await axios.get(`/api/postCategories/${id}/posts?page=${page}&size=${size}`);
    const categoryPostList = res.data;
    return categoryPostList;
}

export default getCategoryPostList;