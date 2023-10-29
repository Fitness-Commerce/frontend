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
    search?: string | null;
}

const getPostsList = async ({
    page,
    size,
    order = "id_ASC",
    search
}: getPostsListProps) => {
    const res = await axios.get(
        `/api/posts?page=${page}&size=${size}&order=${order}` + (search ? `&search=${search}` : "")
    );
    const newPostsList: postListType = res.data;
    console.log(newPostsList);
    
    return newPostsList;
};

export default getPostsList;
