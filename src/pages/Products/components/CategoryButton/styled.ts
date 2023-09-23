import { styled } from "styled-components";

export const Wrapper = styled.li`
    display: inline-block;
    padding: 10px;
    .products__category-btn {
        all: unset;
        width: max-content;
        font-size: var(--text-size-medium);
        font-weight: 100;
        transition: color 0.2s; 
        padding: 5px 8px;
        border: 1px solid black;
        border-radius: 70px;
        &:hover {
            background-color: var(--color-white-primary);
            color: black;
        };
        cursor: pointer;
    }
`
