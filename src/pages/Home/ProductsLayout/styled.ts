import styled, {css} from "styled-components";


interface WrapperProps {
    $isGrid: boolean;
}

export const Wrapper = styled.section<WrapperProps>`
    display: flex;
    width: 100%;

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

export const Container = styled.section`
    .products__title {
        display: flex;
        justify-content: space-between;
        margin: 50px 0;
        h3 {
            font-size: 24px;
            font-weight: bold;
        }
        .product__view-more-btn {
            all: unset;

            font-size: 16px;
            font-weight: 700;
            color: var(--color-accent-blue);
            background-color: transparent;
            border: none;

            cursor: pointer;
        }
    }
`;