import { useState } from "react";
import { useQueries } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import ProductsLayout from "./components/ProductsLayout";
import CategoryButton from "./components/CategoryButton";
import SortDropdown from "./components/SortDropdown";
import ViewLayoutButton from "./components/ViewLayoutButton";

import getCategories from "../../api/products_api/getCategories";
import getProductList from "../../api/products_api/getProductList";

import SideMarginWrapper from "../../style/SideMarginWrapper";
import * as S from "./styled";

//FIXME: 더미데이터
import { dummySortLabel } from "../../../dummy";
import LoadingSpinner from "../../components/LoadingSpinner";

const Products = () => {
    const [{ data: categories, isError, isLoading, error }] = useQueries({
        queries: [
            { queryKey: ["productsCategories"], queryFn: getCategories },
            { queryKey: ["productsList"], queryFn: getProductList },
        ],
    });

    const [isGridLayout, setGridLayout] = useState<boolean>(true);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (isError) {
        throw error;
    }

    return (
        <SideMarginWrapper>
            {/* 테스트 코드 */}
            <S.Title>
                <h3 className="products__title">최신 매물</h3>
            </S.Title>
            <Link to={"/products/1"}>상품 등록</Link>
            <S.Category>
                <nav>
                    <ul className="category__nav-wrapper">
                        {categories &&
                            categories.map((category) => {
                                return (
                                    <CategoryButton
                                        key={category.id}
                                        title={category.title}
                                    />
                                );
                            })}
                    </ul>
                </nav>
                <div className="category__sort-wrapper">
                    {dummySortLabel.map((sortLabel) => {
                        const keyId = self.crypto.randomUUID();
                        return (
                            <SortDropdown key={keyId}>{sortLabel}</SortDropdown>
                        );
                    })}
                </div>
            </S.Category>
            {/* ViewLayoutButton를 ProductLayout에 넣지 않은 이유:
                    메인페이지에선 ViewLayoutButton가 필요 없음 */}
            <ViewLayoutButton
                isGridLayout={isGridLayout}
                setGridLayout={setGridLayout}
            />
            <ProductsLayout layout={isGridLayout} />
        </SideMarginWrapper>
    );
};

export default Products;
