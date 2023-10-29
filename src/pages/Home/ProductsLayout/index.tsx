import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import ProductCard from "../../../components/ProductsLayout/ProductCard.tsx";
import ProductType from "../../../interface/Products.ts";

import getProductList from "../../../api/products_api/getProductList.ts";

import SideMarginWrapper from "../../../style/SideMarginWrapper.tsx";
import * as S from "./styled.ts";
import LoadingSpinner from "../../../components/LoadingSpinner/index.tsx";

import pastTimeCalculator from "../../../util/pastTimeCalculator.ts";

const Products = () => {
    const {
        data: products,
        isLoading,
        isError,
        error,
    } = useQuery(["mainProducts"], () => getProductList({ size: 20 }), {
        select: (data) => {
            const newData = data.content.map((product: ProductType) => ({
                ...product,
                createdAt: pastTimeCalculator(product.createdAt),
                updatedAt:
                    product.updatedAt && pastTimeCalculator(product.updatedAt),
            }));
            return { content: newData };
        },
        staleTime: Infinity,
        cacheTime: 0,
    });

    if (isLoading) return <LoadingSpinner />;
    if (isError) throw error;
    return (
        <SideMarginWrapper>
            <S.Container>
                <div className="products__title">
                    <h3>최신매물</h3>
                    <Link to="/products">
                        <button className="product__view-more-btn">
                            더보기
                        </button>
                    </Link>
                </div>
                <S.Wrapper $isGrid={true}>
                    {products.content.map((product) => (
                        <ProductCard
                            key={product.id}
                            info={product}
                            layout={true}
                        />
                    ))}
                </S.Wrapper>
            </S.Container>
        </SideMarginWrapper>
    );
};

export default Products;
