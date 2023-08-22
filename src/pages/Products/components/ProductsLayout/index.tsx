import * as S from "./styled"
import ProductCard from "./ProductCard";

// FIXME: 더미데이터
import { dummyItems } from "../../../../../dummy";

interface ProductsLayoutProps {
    layout: boolean;
}

const ProductsLayout = ({layout}:ProductsLayoutProps) => {
    return ( 
        <S.Wrapper $isGrid={layout}>
            <ProductCard info={dummyItems[0]} layout={layout}></ProductCard>
            <ProductCard info={dummyItems[0]} layout={layout}></ProductCard>
            <ProductCard info={dummyItems[0]} layout={layout}></ProductCard>
            <ProductCard info={dummyItems[0]} layout={layout}></ProductCard>
            <ProductCard info={dummyItems[0]} layout={layout}></ProductCard>
        </S.Wrapper>
     );
}

export default ProductsLayout;