import axios from "axios";

async function deleteCommunity() {
    const deleteId = prompt("삭제할 게시판 id를 적어주세요");
    const res = await axios.delete(`/api/postCategories` + `/${deleteId}`);
    console.log(res);
}

export default deleteCommunity;
