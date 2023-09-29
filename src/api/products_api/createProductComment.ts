import axios from "axios";
import { PRODUCT_COMMENTS } from "../../contance/endPoint";

const createProductComment = async (itemId: number, comment: string) => {
    await axios.post(
        PRODUCT_COMMENTS.replace("{itemId}", itemId.toString()),
        {
            content: comment
        }
    );
};

export default createProductComment;
