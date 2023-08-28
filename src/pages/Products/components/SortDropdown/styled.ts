import { styled } from "styled-components";

export const Wrapper = styled.li`
    display: inline-block;

    margin-right: 10px;

    .products__category-dropdown {
        display: flex;
        gap: 0.2rem;
        flex-shrink: 0;

        padding: 0.4rem;
        border: 1px solid rgba(0, 0, 0, 0.4);

        font-size: 14px;
        font-weight: bold;
        color: var(--color-black-primary);
        align-items: center;

        .products__category-dropdown__arrow-svg {
            transform: rotate(-90deg);
        }
    }
`;
