import { styled } from "styled-components";

export const Wrapper = styled.li`
    display: inline-block;

    margin-right: 10px;

    .products__category-dropdown {
        all: unset;

        display: flex;
        gap: 0.2rem;
        flex-shrink: 0;

        padding: .4rem;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: var(--button-radius);

        font-size: 14px;
        font-weight: bold;
        color: var(--color-black-primary);
        align-items: center;

        .products__category-dropdown__arrow-svg {
            transform: rotate(-90deg);
        };

        cursor: pointer;
    }
`;
