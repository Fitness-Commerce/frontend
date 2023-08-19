import { styled } from "styled-components";


export const Products = styled.section`
    .products__title {
        display: flex;
        justify-content: space-between;
        margin: 50px 0;
        h3 {
            font-size: 24px;
            font-weight: bold;
        }
        button {
            font-size: 16px;
            font-weight: 700;
            color: var(--color-accent-blue);
            background-color: transparent;
            border: none;
        }
    }
    .products__box {
        display: flex;
        flex-direction: column;
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`;

export const ProductCard = styled.article`
    padding: 10px;
    .product-card__img {
        width: 100%;
        margin-bottom: 5%;
        border-radius: 6px;
    }
    .product-card__data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        span { width: 100%; }
        /* 거래상태 표시(status) */
        .product-card__status-wrapper {
            padding: 12px 0;
        }
        .product-card__status {
            border-radius: 4px;
            background-color: var(--color-accent-bright-green);
            color: var(--color-accent-dark-green);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 28px;
            font-weight: 500;
        }

        /* 제품 이름(title) */

    }
`;