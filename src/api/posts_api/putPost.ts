import axios from "axios";

async function putPost(formData: FormData, id: string) {
    console.dir(formData.getAll("images"));

    const accessToken = localStorage.getItem("accessToken");
    const res = await axios.put(`/api/posts/${id}`, formData, {
        headers: {
            Authorization: `${accessToken}`,
        },
    });
    console.dir(res);
    
    const postId = res.data;
    console.log(postId);
    return postId;
}

export default putPost;