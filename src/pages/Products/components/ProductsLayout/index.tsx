import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import {
    viewModeState,
    SelectedCategoryState,
} from "../../../../recoil/products/atom";
import { filteredOptionState } from "../../../../recoil/products/selector";
import { useQueryClient, useInfiniteQuery } from "@tanstack/react-query";

import useAuth from "../../../../hooks/useAuth";
import ProductCard from "./ProductCard";

import getProductList from "../../../../api/products_api/getProductList";
import getCategoryItems from "../../../../api/products_api/getCategoryItems";

import pastTimeCalculator from "../../../../util/pastTimeCalculator";

import ProductType, { ProductListType } from "../../../../interface/Products";

import { Scroll as InfiniteScroll } from "./styled";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import { sortLabel } from "../../../../contance/products";

interface ProductsLayoutProps {
    layout: boolean;
}

const ProductsLayout = ({ layout }: ProductsLayoutProps) => {
    const queryClient = useQueryClient();
    const excuteGetProductList = useAuth(getProductList);
    const selectedCategory = useRecoilValue(SelectedCategoryState);
    const viewType = useRecoilValue(viewModeState);
    const option = useRecoilValue(filteredOptionState);

    useEffect(() => {
        // option 변경될 때마다 쿼리 데이터 초기화
        queryClient.removeQueries(["productsList"]);
    }, [viewType, option, selectedCategory, queryClient]);

    // useInfiniteQuery 무한스크롤
    const {
        data: list,
        fetchNextPage,
        hasNextPage,
        isError,
        isLoading,
        error,
    } = useInfiniteQuery(
        ["productsList", option, viewType, selectedCategory],
        ({ pageParam = 1 }) => {
            // 카테고리 조회
            if (selectedCategory)
                return getCategoryItems({
                    id: selectedCategory,
                    page: pageParam,
                    order: option,
                });

            // 지역보기면 인증토큰 같이 보냄
            return viewType === sortLabel[0]
                ? getProductList({ page: pageParam })
                : excuteGetProductList({ page: pageParam, order: option });
        },
        {
            getNextPageParam: (_, allPosts) => {
                return allPosts.length < allPosts[0].totalPages // 현재 가져온 페이지 개수가 totalPages보다 작아야됨
                    ? allPosts.length + 1
                    : undefined;
            },
            select: (data) => {
                const newData = data.pages.map(
                    (productList: ProductListType) => ({
                        ...productList,
                        content: productList.content.map(
                            (product: ProductType) => ({
                                ...product,
                                createdAt: pastTimeCalculator(
                                    product.createdAt
                                ),
                                updatedAt:
                                    product.updatedAt &&
                                    pastTimeCalculator(product.updatedAt),
                            })
                        ),
                    })
                );
                return { ...data, pages: newData };
            },
        }
    );

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (isError) {
        throw error;
    }

    return (
        <InfiniteScroll
            $isGrid={layout}
            loadMore={() => fetchNextPage()}
            hasMore={hasNextPage}
            loader={<LoadingSpinner key={list.pages.length} />}
        >
            {list?.pages.map((pageData) =>
                pageData.content.map((product: ProductType) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        layout={layout}
                    />
                ))
            )}
        </InfiniteScroll>
    );
};

export default ProductsLayout;
