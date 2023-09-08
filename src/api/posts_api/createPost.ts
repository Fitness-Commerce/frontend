import axios from "axios";
import refresh from "./refresh";

export const Axios = (() => {
    const accessToken = localStorage.getItem("accessToken");
    const instance = axios.create({
        baseURL: "",
        headers: {
            Authorization: `${accessToken}`,
        },
        withCredentials: true,
        timeout: 10 * 1000,
    });

    instance.interceptors.response.use(
        (res) => {
            return res;
        },
        (err) => {
            if (err.response.status === 401) {
                return refresh();
            }
            console.dir(err);
            return err;
        }
    );

    return instance;
})()

async function createPost(formData: FormData) {
    const accessToken = localStorage.getItem("accessToken");
    const res = await axios.post("/api/posts", formData, {
        headers: {
            Authorization: `${accessToken}`,
        },
    });
    console.dir(res);
    
    const postId = res.data;
    console.log(postId);
    return postId;
}

export default createPost;
