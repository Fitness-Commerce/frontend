import axios from "axios";

async function getPost(postId: string) {
    const res = await axios.get(`/api/posts/${postId}`);
    const post = res.data;
    return post;
}

export default getPost;