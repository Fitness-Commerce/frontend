import axios from "axios";

interface postListType {
    totalPages: number;
    content: postType[];
}

export interface postType {
    id: number;
    postId: number;
    memberId: number;
    nickname: string;
    content: string;
    created_at: string;
    updated_at?: string;
}

const getPostsList = async (
    page: number,
    size: number,
    // order: string,
) => {
    const res = await axios.get(`/api/posts?page=${page}&size=${size}&order=id_ASC`);
    const newPostsList: postListType = res.data;
    return newPostsList;
};

export default getPostsList;
