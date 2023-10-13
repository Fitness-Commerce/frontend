import { useState } from "react";

import SortDropdown from "./components/SortDropdown";
import FilterDropdown from "./components/FilterDropdown";
import ViewLayout from "./components/ViewLayoutButton";
// import Categories from "./components/Categories";
import ProductsLayout from "./components/ProductsLayout";

import SideMarginWrapper from "../../style/SideMarginWrapper";
import * as S from "./styled";

import { filterLabel } from "../../contance/products";

const Products = () => {
    const [isGridLayout, setGridLayout] = useState<boolean>(true);

    return (
        <SideMarginWrapper>
            {/* 테스트 코드 */}
            <S.Title>
                <h1 className="products__title">최신 매물</h1>
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
        </SideMarginWrapper>
    );
};

export default Products;
