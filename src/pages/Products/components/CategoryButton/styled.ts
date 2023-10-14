import { styled } from "styled-components";

export const Wrapper = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 10px;
    .products__category-btn {
        all: unset;
        width: max-content;
        font-size: var(--text-size-medium);
        font-weight: 300;
        transition: color 0.2s; 
        padding: 5px 8px;
        border-radius: 70px;
        &:hover {
            background-color: var(--color-white-primary);
            color: black;
        };
        cursor: pointer;
    }
`
