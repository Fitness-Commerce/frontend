import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import * as S from "./styled";

import PostForm from "../../components/PostForm";

import PostsListLayout from "./components/PostsListLayout";
import FilterDropdown from "../Products/components/FilterDropdown";
import PostCategoryButton from "./components/PostCategoryButton";

import { getPostCategoriesType } from "../../api/posts_api/getPostCategories";

import { postFilterLabel } from "../../contance/posts";

const Community = () => {
    const [isPostForm, setIsPostForm] = useState(false);
    const [size, setSize] = useState(10);
    const queryClient = useQueryClient();

    // 카테고리는 프리패칭된 데이터 사용
    const postCategories = queryClient.getQueryData([
        "postsCategories",
    ]) as getPostCategoriesType[];

    // UX 위해서 로컬스토리지에 유저가 선택했던 보여지는 게시글 수 저장
    useEffect(() => {
        const previousSize = localStorage.getItem("communitySize");
        if (previousSize) {
            setSize(parseInt(previousSize));
        }
    }, []);

    // 글쓰기
    if (isPostForm) {
        return <PostForm setIsPostForm={setIsPostForm} />;
    }

    return (
        <S.CommunitySideMargin>
            {/* Title */}
            <S.CommunityTitle>
                <h1 className="community__title">유저 게시글</h1>
            </S.CommunityTitle>

            {/* 카테고리 */}
            <S.CommunityCategory>
                {/* <ul className="community__post-boards-wrapper">
                    {postCategories &&
                        postCategories.map((category) => {
                            return (
                                <PostCategoryButton
                                    key={self.crypto.randomUUID()}
                                    id={category.id}
                                    title={category.title}
                                ></PostCategoryButton>
                            );
                        })}
                </ul> */}
                <span>전체</span>
                <span>꿀팁</span>
                <span>유머</span>
            </S.CommunityCategory>

            {/* <button type="button" onClick={() => setIsPostForm(true)}>
                글쓰기
            </button> */}
            {/* <select
                onChange={(e) => {
                    localStorage.setItem("communitySize", e.target.value);
                    setSize(parseInt(e.target.value));
                }}
                value={localStorage.getItem("communitySize") || size}
            >
                <option value={10}>10</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
            </select> */}
            <FilterDropdown filterLabel={postFilterLabel} />
            {/* <PostsListLayout size={size}/> */}
        </S.CommunitySideMargin>
    );
};

export default Community;
