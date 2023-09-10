import { useQuery } from "@tanstack/react-query";

import ProductCard from "./ProductCard";

// import {ProductListType} from "../../../../interface/Products";
import getProductList from "../../../../api/products_api/getProductList";


import * as S from "./styled";

// FIXME: 더미데이터
// import { dummyItems } from "../../../../../dummy";

interface ProductsLayoutProps {
    layout: boolean;
}

const ProductsLayout = ({ layout }: ProductsLayoutProps) => {
    // const {
    //     data: list,
    //     isError,
    //     isLoading,
    //     error,
    // } = useQuery(["productsList"], getProductList);

    // if (isLoading) {
    //     return <LoadingSpinner />;
    // }

    // if (isError) {
    //     throw error;
    // }

    // const list = useQueryClient().getQueryData(["productsList"]) as ProductListType;

    const {data: list} = useQuery(["productsList"], getProductList);

    return (
        <S.Wrapper $isGrid={layout}>
            {list && list.content.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    layout={layout}
                ></ProductCard>
            ))}
        </S.Wrapper>
    );
};

export default ProductsLayout;
