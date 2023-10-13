import axios from "axios";

export interface postListType {
    totalPages: number;
    content: postType[];
}

export interface postType {
    id: number;
    memberId: number;
    postCategoryId: number;
    postImageUrl: string[];
    title: string;
    nickname: string;
    content: string;
    viewCount: number;
    createdAt: string;
    updatedAt?: string;
}

export interface getPostsListProps {
    page: number;
    size: number;
    order?: string;
}

const getPostsList = async ({
    page,
    size,
    order = "id_ASC",
}: getPostsListProps) => {
    const res = await axios.get(
        `/api/posts?page=${page}&size=${size}&order=${order}`
    );
    const newPostsList: postListType = res.data;
    return newPostsList;
};

export default getPostsList;
