import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import * as S from "./styled";

import PostForm from "../../components/PostForm";

import PostsListLayout from "./components/PostsListLayout";
import FilterDropdown from "../Products/components/FilterDropdown";
import PostCategoryButton from "./components/PostCategoryButton";

import getPostCategories from "../../api/posts_api/getPostCategories";

import { postFilterLabel } from "../../contance/posts";
import LoadingSpinner from "../../components/LoadingSpinner";

const Community = () => {
    const [isPostForm, setIsPostForm] = useState(false);
    const [size, setSize] = useState(10);

    const {
        data: postCategories,
        isError,
        isLoading,
        error,
    } = useQuery(["postsCategories"], getPostCategories);

    // UX 위해서 로컬스토리지에 유저가 선택했던 보여지는 게시글 수 저장
    useEffect(() => {
        const previousSize = localStorage.getItem("communitySize");
        if (previousSize) {
            setSize(parseInt(previousSize));
        }
    }, []);

    if (isError) throw error;
    if (isLoading) return <LoadingSpinner />;

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
                <ul className="community__post-boards-wrapper">
                    {postCategories &&
                        postCategories.map((e: { id: number; title: string; }) => {
                            return (
                                <PostCategoryButton
                                    key={self.crypto.randomUUID()}
                                    id={e.id}
                                    title={e.title}
                                ></PostCategoryButton>
                            );
                        })}
                </ul>
            </S.CommunityCategory>
                        
            {/* Filter */}
            <FilterDropdown filterLabel={postFilterLabel} />

            {/* 게시글 리스트 */}
            <PostsListLayout size={size}/>
            
            {/* 페이지 버튼 및 글 쓰기 */}
            <S.CommunityBottom>
                <span className="community-bottom__empty">empty</span>
                <button className="community-bottom__write-btn" type="button" onClick={() => setIsPostForm(true)}>글쓰기</button>
            </S.CommunityBottom>
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
            
        </S.CommunitySideMargin>
    );
};

export default Community;
