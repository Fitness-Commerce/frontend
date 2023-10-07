import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import SideMarginWrapper from "../../style/SideMarginWrapper";
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
        <SideMarginWrapper>
            {/* FIXME: 커뮤니티 이름 출력 필요 */}
            <S.CommunityTitle>
                <h1 className="community__title">커뮤니티</h1>
            </S.CommunityTitle>

            <S.CommunityCategory>
                <ul className="community__post-boards-wrapper">
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
                </ul>
            </S.CommunityCategory>
            <button type="button" onClick={() => setIsPostForm(true)}>
                글쓰기
            </button>
            <select
                onChange={(e) => {
                    localStorage.setItem("communitySize", e.target.value);
                    setSize(parseInt(e.target.value));
                }}
                value={localStorage.getItem("communitySize") || size}
            >
                <option value={10}>10</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
            </select>
            <FilterDropdown filterLabel={postFilterLabel} />
            <PostsListLayout size={size} />
        </SideMarginWrapper>
    );
};

export default Community;
