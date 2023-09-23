import { styled } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    margin-right: 15px;
    
    .products__category-dropdown {
        display: flex;
        border-radius: var(--button-radius);

        padding: 0.2rem;
        border: 1px solid rgba(0, 0, 0, 0.4);

        font-size: 12px;
        font-weight: 500;
        background-color: white;
        color: var(--color-black-primary);
        align-items: center;

        .products__category-dropdown__arrow-svg {
            transform: rotate(-90deg);
        }

        cursor: pointer;
    }
`;

export const SortModal = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: white;
    color: var(--color-black-primary);
    border-radius: var(--button-radius);
    gap: 8px;
    padding: 12px 6px;
    
    .view-mode-btn {
        cursor: pointer;
        border: 0px;
        border-radius: var(--button-radius);
        padding: 2px 6px;
        font-size: 12px;
        transition: all .3s;
        
        &:hover {
            background-color: var(--color-button-bg-hover);
            color: white;
        }

        &:disabled {
            cursor: default;
        }
    }
`;
