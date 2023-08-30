import axios from "axios";

interface Post {
    postId: number;
    postTitle: string;
    author: string;
    viewCount: number;
    created_at: string;
}

const getPostsList = async () => {
    const res = await axios.get("/api/posts");
    const newPostsList: Post[] = res.data;
    return newPostsList;
};

export default getPostsList;
