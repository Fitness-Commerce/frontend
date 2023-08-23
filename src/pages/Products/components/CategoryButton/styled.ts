import { styled } from "styled-components";

export const Wrapper = styled.li`
    display: inline-block;

    margin-right: 16px;

    .products__category-btn {
        all: unset;

        font-size: 1rem;
        font-weight: bold;
        color: var(--color-black-primary);

        transition: color 0.2s; 
        cursor: pointer;

        &:hover {
            color: rgb(200, 200, 200);
        };
    }
`
