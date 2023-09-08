import { Axios } from "./createPost";

async function getPost(postId: string) {
    const res = await Axios.get(`/api/posts/${postId}`);
    const post = res.data;
    return post;
}

export default getPost;