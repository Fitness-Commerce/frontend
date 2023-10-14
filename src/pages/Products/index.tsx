import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { SelectedCategoryState } from "../../recoil/products/atom";

import SortDropdown from "./components/SortDropdown";
import FilterDropdown from "./components/FilterDropdown";
import ViewLayout from "./components/ViewLayoutButton";
import ProductsLayout from "./components/ProductsLayout";

import getProductCategories from "../../api/products_api/getProductCategories";

import SideMarginWrapper from "../../style/SideMarginWrapper";
import LoadingSpinner from "../../components/LoadingSpinner";
import * as S from "./styled";

import { filterLabel } from "../../contance/products";

const Products = () => {
    const [isGridLayout, setGridLayout] = useState<boolean>(true);
    const [selectedCategory, setSelectedCategory] = useRecoilState(
        SelectedCategoryState
    );

    const {
        data: categories,
        isError,
        isLoading,
        error,
    } = useQuery(["productsCategories"], getProductCategories);

    useEffect(() => {
        return () => setSelectedCategory("");
    }, []);

    if (isLoading) return <LoadingSpinner />;
    if (isError) throw error;

    return (
        <SideMarginWrapper>
            <S.Container>
                <S.Title>
                    <h1 className="products__title">
                        {selectedCategory
                            ? categories.find(
                                  (category) =>
                                      category.id.toString() == selectedCategory
                              )?.title
                            : "최신 매물"}
                    </h1>
                </S.Title>

                <div className="category__sort-wrapper">
                    <SortDropdown />
                    <FilterDropdown filterLabel={filterLabel} />
                </div>
                {/* ViewLayoutButton를 ProductLayout에 넣지 않은 이유:
                    메인페이지에선 ViewLayoutButton가 필요 없음 */}
                <ViewLayout
                    isGridLayout={isGridLayout}
                    setGridLayout={setGridLayout}
                />
                <ProductsLayout layout={isGridLayout} />
            </S.Container>
        </SideMarginWrapper>
    );
};

export default Products;
