import InfiniteScroll from "react-infinite-scroller";
import styled, { css } from "styled-components";

interface WrapperProps {
    $isGrid: boolean;
}

interface ProductCardProps {
    $isGrid: boolean;
}

export const Scroll = styled(InfiniteScroll)<WrapperProps>`
    width: 100%;
    display: flex;

    ${(props) => {
        switch (props.$isGrid) {
            case true:
                return css`
                    flex-wrap: wrap;
                    flex-direction: row;
                `;
            default:
                return css`
                    flex-wrap: nowrap;
                    flex-direction: column;
                `;
        }
    }}
`;

export const ProductCard = styled.article<ProductCardProps>`
    display: flex;
    padding: 8px;
    cursor: pointer;

    /* 그리드/리스트 레이아웃 */
    ${(props) => {
        if (props.$isGrid) {
            return css`
                flex-direction: column;
                flex-basis: 20%;
                max-width: 20%;

                .product-card__img-wrapper {
                    overflow: hidden;
                    width: 100%;
                    border-radius: 4px;

                    .product-card__img {
                        width: 100%;
                    }
                }
            `;
        } else {
            return css`
                flex-direction: row;

                .product-card__img-wrapper {
                    flex-shrink: 0;
                    overflow: hidden;
                    width: 200px;
                    border-radius: 4px;

                    .product-card__img {
                        width: 100%;
                    }
                }
            `;
        }
    }}

    /* 상품 정보 레이아웃
    거래 상태 -> 이름/가격 -> 지역/생성 날짜 */
    .product-card__data {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 16px;
        margin-left: ${(props) => (props.$isGrid ? 0 : "20px")};

        .product-card__status-wrapper {
            padding: 12px 0;
        }
        .product-card__status {
            border-radius: 4px;
            background-color: rgba(213, 243, 231);
            color: rgb(19, 189, 126);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 28px;
            font-weight: 500;
        }

        .product-card__name-price-wrapper {
            display: flex;
            width: 100%;
            justify-content: space-between;
            gap: 8px;
            height: ${(props) => (props.$isGrid ? "fit-content" : "100%")};
            flex-direction: ${(props) => (props.$isGrid ? "column" : "row")};

            .product-card__name {
                font-size: 1rem;
                font-weight: 700;
            }

            .product-card__price {
                font-size: 1.6rem;
                font-weight: 900;
            }
        }

        .product-card__local,
        .product-card__time {
            display: block;
            font-size: 0.8rem;
            font-weight: 700;
            color: rgba(0, 0, 0, 0.4);
        }
    }
`;
