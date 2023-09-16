import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    margin-right: 10px;
    
    .products__category-dropdown {
        display: flex;
        border-radius: var(--button-radius);
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

        cursor: pointer;
    }
`;

export const SortModal = styled.div`
    width: transparent;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: var(--color-white-primary);
    border-radius: var(--button-radius);
    /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); */
    gap: 8px;
    padding: 12px 6px;
    
    .view-mode-btn {
        cursor: pointer;
        border: 0px;
        border-radius: var(--button-radius);
        padding: 2px 6px;

        &:disabled {
            cursor: default;
        }
    }
`;
