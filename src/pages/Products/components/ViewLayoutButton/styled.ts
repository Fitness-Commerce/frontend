import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 54px;
    padding: 17px 0;
    align-content: center;
    justify-content: space-between;

    .products__view-layout-btn {
        cursor: pointer;
        all: unset;
        display: inline-block;
        svg {
           fill: black; 
        }
    }
`

export const LinkToProductForm = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: var(--button-radius);
    background-color: var(--color-black-primary);
    padding: 1rem;
    color: var(--color-white-primary);
    &:hover {
        background-color: var(--color-button-bg-hover);
    }
`