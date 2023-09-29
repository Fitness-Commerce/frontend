import * as S from "./styled";

import PostList from "./Post";

import LoadingSpinner from "../../../../components/LoadingSpinner";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { filteredOptionState } from "../../../../recoil/products/selector";
import { useRecoilValue } from "recoil";
import getCategoryPostList from "../../../../api/posts_api/getCategoryPostList";
import getPostsList from "../../../../api/posts_api/getPostsList";
import Pagination from "../../../../components/Pagination";

interface PostsListLayoutProps {
    size: number;
}

const PostsListLayout = ({ size }: PostsListLayoutProps) => {
    const categoryId = useSearchParams()[0].get("category-id");
    const [page, setPage] = useState(1);

    const option = useRecoilValue(filteredOptionState); // 최신순, 가격순 정렬 등

    // 이쪽은 getCategoryPostList가 return 타입이 any라서 getPostsList의 return 타입과 충돌 안남
    const {
        data: postList,
        isLoading: isListLoading,
        isError,
        error,
    } = useQuery(
        ["postList", size, page, option, categoryId || "default"],
        categoryId
            ? () => {
                  setPage(1);
                  return getCategoryPostList({
                      categoryId,
                      page,
                      size,
                      order: option,
                  });
              }
            : () => getPostsList({ page, size, order: option })
    );

    if (isListLoading) {
        return <LoadingSpinner />;
    }

    if (isError) throw error;

    return (
        <S.Wrapper>
            {postList?.content?.map((post) => {
                return <PostList key={post.id} post={post} />;
            })}

            <Pagination
                currentPage={page}
                totalPages={postList.totalPages}
                onPageChange={(page) => setPage(page)}
            />
        </S.Wrapper>
    );
};

export default PostsListLayout;
