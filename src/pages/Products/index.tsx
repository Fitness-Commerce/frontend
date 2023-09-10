import { useState } from "react";

import SideMarginWrapper from "../../style/SideMarginWrapper";
import * as S from "./styled";

import ProductsLayout from "./components/ProductsLayout";
import CategoryButton from "./components/CategoryButton";
import SortDropdown from "./components/SortDropdown";
import ViewLayoutButton from "./components/ViewLayoutButton";

//FIXME: 더미데이터
import { dummyCategories, dummySortLabel } from "../../../dummy";


const Products = () => {
    const [isGridLayout, setGridLayout] = useState<boolean>(true);
    return (
        <SideMarginWrapper>
            {/* 테스트 코드 */}
            <S.Title>
                <h3 className="products__title">최신 매물</h3>
            </S.Title>
            <S.Category>
                <nav>
                    <ul className="category__nav-wrapper">
                        {dummyCategories.map((category) => {
                            const keyId = self.crypto.randomUUID();
                            return (
                                <CategoryButton key={keyId}>
                                    {category}
                                </CategoryButton>
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
            <ProductsLayout layout={isGridLayout}/>
        </SideMarginWrapper>
    );
};

export default Products;
