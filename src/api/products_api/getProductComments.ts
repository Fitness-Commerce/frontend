import axios from "axios";
import { PRODUCT_COMMENTS } from "../../contance/endPoint";

export interface productCommentType {
    totalPages: number;
    content: productCommentContentType[];
}

export interface productCommentContentType {
    id: number;
    itemId: number;
    memberId: number;
    content: string;
    created_at: string;
    updated_at?: string;
}

interface getProductCommentsProps {
    itemId: number;
    page?: number;
    size?: number;
    order?: string;
}

const getProductComments = async ({
    itemId,
    page = 1,
    size = 5,
    order = "id_ASC",
}: getProductCommentsProps) => {
    const res = await axios.get(
        PRODUCT_COMMENTS.replace("{itemId}", itemId.toString()) +
            `?page=${page}&size=${size}&order=${order}`
    );
    const productComments: productCommentType = res.data;
    return productComments;
};

export default getProductComments;
