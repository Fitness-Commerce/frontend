import axios from "axios";

// FIXME: 기존 axios instance 생성자 함수 (accessToken이 갱신 안되는 문제 있음)

// export const Axios = (() => {
//     const accessToken = localStorage.getItem("accessToken");
//     const instance = axios.create({
//         baseURL: "",
//         headers: {
//             Authorization: `${accessToken}`,
//         },
//         withCredentials: true,
//         timeout: 10 * 1000,
//     });

//     instance.interceptors.response.use(
//         (res) => {
//             return res;
//         },
//         (err) => {
//             if (err.response.status === 401) {
//                 return refresh();
//             }
//             console.dir(err);
//             return err;
//         }
//     );

//     return instance;
// })()

async function createPost(formData: FormData) {
    const res = await axios.post("/api/posts", formData);
    
    const postId = res.data.id;
    console.log(postId);
    return postId;
}

export default createPost;
