import axios from "axios";

async function putPost(formData: FormData, id: string) {
    const accessToken = localStorage.getItem("accessToken");
    const res = await axios.put(`/api/posts/${id}`, formData, {
        headers: {
            Authorization: `${accessToken}`,
        },
    });
    console.dir(res);
    
    const postId = res.data.id;
    console.log(postId);
    return postId;
}

export default putPost;