import { styled } from "styled-components";

// 상품 페이지 제목 (오른쪽 더보기 버튼 클래스로 취사 선택)
export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    height: 48px;
    align-items: center;

    .products__title {
        color: var(--color-bright-black);
        font-size: 24px;
        font-weight: bold;
    }

    .products__more-items-btn {
        font-size: 16px;
        font-weight: 700;
        color: #47a1e5;
        background-color: transparent;
        border: none;
    }
`;

// 상품 카테고리 (카테고리 네비, 카테고리 정렬 취사 선택)
export const Category = styled.div`
    display: flex;
    flex-direction: column;

    .category__nav-wrapper {
        display: flex;
        height: 48px;
        overflow-x: hidden;
        align-items: center;
    }

    .category__sort-wrapper {
        display: flex;
        height: 40px;
        align-items: center;
    }
`;
