import axios from "axios";

import { postType } from "./getPostsList";

async function getPost(postId: string) {
    const res = await axios.get(`/api/posts/${postId}`);
    const post: postType = res.data;
    return post;
}

export default getPost;