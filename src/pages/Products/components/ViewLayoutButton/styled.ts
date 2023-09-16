import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 54px;
    padding: 17px 0;
    align-content: center;
    justify-content: space-between;

    .products__view-layout-btn {
        all: unset;
        display: inline-block;

        cursor: pointer;
    }
`

export const LinkToProductForm = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    outline: none;
    border-radius: var(--button-radius);
    background-color: var(--color-accent-dark-green);
    box-shadow: 0 0 4px 6px var(--color-accent-bright-green);
    padding: 4px 8px;
    transition: filter 0.2s ease;
    
    span {
        display: inline-block;
        color: var(--color-white-primary);
    }

    &:hover {
        filter: brightness(0.95);
    }
    cursor: pointer;
`