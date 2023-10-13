import axios from "axios";
import { getPostsListProps } from "./getPostsList";

import { postListType } from "./getPostsList";

interface getCategoryPostListProps extends getPostsListProps {
    categoryId: string;
}

async function getCategoryPostList({
    categoryId,
    page,
    size,
    order = "id_ASC",
}: getCategoryPostListProps) {
    const res = await axios.get(
        `/api/postCategories/${categoryId}/posts?page=${page}&size=${size}&order=${order}`
    );
    const categoryPostList: postListType = res.data;
    return categoryPostList;
}

export default getCategoryPostList;
