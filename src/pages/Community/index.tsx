import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import SideMarginWrapper from "../../style/SideMarginWrapper";
import * as S from "./styled";

import PostForm from "../../components/PostForm";
import LoadingSpinner from "../../components/LoadingSpinner";

import PostsListLayout from "./components/PostsListLayout";
import PostCategoryButton from "./components/PostCategoryButton";

import getPostCategories from "../../api/posts_api/getPostCategories";
import getCategoryPostList from "../../api/posts_api/getCategoryPostList";
import getPostsList from "../../api/posts_api/getPostsList";
import PostPagination from "./components/PostPageButtonLayout";

const Community = () => {
    const categoryId = useSearchParams()[0].get("category-id");
    const [size, setSize] = useState(10);
    const [page, setPage] = useState(1);
    const { data: postCategories, isLoading: isCategoriesLoading } = useQuery(
        ["postCategory"],
        getPostCategories
    );
    const { data: postList, isLoading: isListLoading } = useQuery(
        ["postList", size, page],
        categoryId
            ? () => {
                  setPage(0);
                  return getCategoryPostList(categoryId, page, size);
              }
            : () => getPostsList(page, size) // 순서 중요!
    );
    const [isPostForm, setIsPostForm] = useState(false);

    // UX 위해서 로컬스토리지에 유저가 선택했던 보여지는 게시글 수 저장
    useEffect(() => {
        const previousSize = localStorage.getItem("communitySize");
        if (previousSize) {
            setSize(parseInt(previousSize));
        }
    }, []);

    if (isListLoading || isCategoriesLoading) {
        return <LoadingSpinner />;
    }

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
            <PostsListLayout postList={postList.content} />
            <button type="button" onClick={() => setIsPostForm(true)}>
                글쓰기
            </button>
            <select
                onChange={(e) => {
                    localStorage.setItem("communitySize", e.target.value);
                    setSize(parseInt(e.target.value))
                }}
                value={localStorage.getItem("communitySize") || size}
            >
                <option value={10}>10</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
            </select>
            <PostPagination
                currentPage={page}
                totalPages={postList.totalPages}
                onPageChange={(page) => setPage(page)}
            />
            {/* <input
                type="number"
                placeholder="size"
                onChange={(e) =>
                    setSize((old) =>
                        parseInt(e.target.value) > 0
                            ? parseInt(e.target.value)
                            : old
                    )
                }
            />
            <input
                type="number"
                placeholder="page"
                onChange={(e) =>
                    setPage((old) =>
                        parseInt(e.target.value) >= 0
                            ? parseInt(e.target.value)
                            : old
                    )
                }
            /> */}
        </SideMarginWrapper>
    );
};

export default Community;
