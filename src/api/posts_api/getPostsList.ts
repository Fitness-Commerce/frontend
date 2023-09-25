import axios from "axios";

const getPostsList = async (
    page: number,
    size: number,
    // order: string,
) => {
    const res = await axios.get(`/api/posts?page=${page}&size=${size}&order=id_ASC`);
    const newPostsList = res.data;
    return newPostsList;
};

export default getPostsList;
