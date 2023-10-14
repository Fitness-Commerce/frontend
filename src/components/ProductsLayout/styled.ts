import styled, { css } from "styled-components";

interface WrapperProps {
    $isGrid: boolean;
}

interface ProductCardProps {
    $isGrid: boolean;
}

export const Wrapper = styled.section<WrapperProps>`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

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
    width: 100%;
    display: flex;
    padding: 8px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease;
    align-self: stretch;

    span {
        padding: 2px 0;
    }

    &:hover {
        filter: brightness(0.9);
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.4);
    }

    /* 그리드/리스트 레이아웃 */
    ${(props) => {
        if (props.$isGrid) {
            return css`
                flex-direction: column;
                flex-basis: calc(100% / 6);
                max-width: calc(100% / 6);

                @media ${(props) => props.theme.media.laptop} {
                    flex-basis: calc(100% / 5);
                    max-width: calc(100% / 5);
                }
                @media ${(props) => props.theme.media.tablet} {
                    flex-basis: calc(100% / 4);
                    max-width: calc(100% / 4);
                }
                @media ${(props) => props.theme.media.mobile} {
                    flex-basis: calc(100% / 2);
                    max-width: calc(100% / 2);
                }

                .product-card__local,
                .product-card__time {
                    display: block;
                }

                .product-card__img-wrapper {
                    flex-basis: 50%;
                    display: flex;
                    overflow: hidden;
                    width: 100%;
                    border-radius: 4px;
                    background-color: rgba(0, 0, 0, 0.2);

                    object-fit: contain;

                    .product-card__img {
                        width: 100%;
                    }
                }
            `;
        } else {
            return css`
                align-items: center;
                flex-direction: row;
                max-width: 70vw;
                margin: auto;
                padding: 16px;

                .product-card__local {
                    display: flex;
                    max-width: fit-content;
                    gap: 24px;
                    p {
                        display: inline-block;
                    }
                }

                .product-card__time {
                    display: block;
                }

                @media ${(props) => props.theme.media.laptop} {
                    max-width: 95vw;
                    .product-card__time {
                        display: inline;
                    }
                }

                .product-card__img-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                    overflow: hidden;
                    width: 200px;
                    height: 200px;

                    @media ${(props) => props.theme.media.laptop} {
                        width: 150px;
                        height: 150px;
                    }

                    @media ${(props) => props.theme.media.mobile} {
                        width: 100px;
                        height: 100px;
                    }

                    border-radius: 4px;
                    background-color: rgba(0, 0, 0, 0.2);

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
                font-size: 1.3rem;
                font-weight: 600;
            }
        }

        .product-card__local,
        .product-card__time {
            margin-top: 8px;
            font-size: 0.8rem;
            font-weight: 700;
            color: rgba(0, 0, 0, 0.4);
        }
    }

    @media ${(props) => props.theme.media.mobile} {
        .product-card__name {
            font-size: 0.9rem;
            font-weight: 700;
        }

        .product-card__price {
            font-size: 1.1rem !important;
            font-weight: 600 !important;
        }

        .product-card__local,
        .product-card__time {
            font-size: 0.6rem !important;
        }
    }
`;

interface IDashboardProductProp {
    $itemStatus: string | undefined;
}

export const DashboardProduct = styled.div<IDashboardProductProp>`
    padding: 3rem 0;
    #product-card__local,
    #product-card__time {
        color: var(--color-white-primary);
        font-weight: 400;
    }
    #product-card__img-wrapper {
        width: 150px;
    }
    #product-card__status {
        color: var(--color-black-primary);
    }
    ${(props) => {
        if (props.$itemStatus === "SELLING") {
            return css`
                #product-card__status {
                    background-color: rgb(97, 197, 85);
                }
            `;
        } else if (props.$itemStatus === "RESERVED") {
            return css`
                #product-card__status {
                    background-color: rgb(245, 191, 80);
                    font-size: 14px;
                }
            `;
        } else {
            return css`
                #product-card__status {
                    background-color: rgb(236, 105, 95);
                }
            `;
        }
    }}
`;
