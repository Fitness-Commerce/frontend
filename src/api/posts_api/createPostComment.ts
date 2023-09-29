import axios from "axios";
import { POST_COMMENTS } from "../../contance/endPoint";

const createPostComment = async (postId: number, content: string) => {
    await axios.post(
        POST_COMMENTS.replace("{postId}", postId.toString()),
        {
            content: content
        }
    );
};

export default createPostComment;
