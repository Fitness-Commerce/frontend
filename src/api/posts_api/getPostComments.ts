import axios from "axios";
import { POST_COMMENTS } from "../../contance/endPoint";

export interface postCommentType {
    totalPages: number;
    content: postCommentContentType[];
}

export interface postCommentContentType {
    id: number;
    postId: number;
    memberId: number;
    nickname: string;
    content: string;
    created_at: string;
    updated_at?: string;
}

interface getPostCommentsProps {
    postId: number;
    page?: number;
    size?: number;
    order?: string;
}

const getPostComments = async ({
    postId,
    page = 1,
    size = 5,
    order = "id_ASC",
}: getPostCommentsProps) => {
    const res = await axios.get(
        POST_COMMENTS.replace("{itemId}", postId.toString()) +
            `?page=${page}&size=${size}&order=${order}`
    );
    const newPostComments: postCommentType = res.data;
    return newPostComments;
};

export default getPostComments;