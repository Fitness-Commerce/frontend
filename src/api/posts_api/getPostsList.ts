import axios from "axios";

const getPostsList = async (
    page: number,
    size: number,
    // orderBy: string,
    // directrion: string
) => {
    const res = await axios.get(`/api/posts?page=${page}&size=${size}`);
    const newPostsList = res.data;
    return newPostsList;
};

export default getPostsList;
