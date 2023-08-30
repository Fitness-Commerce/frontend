import { styled } from "styled-components";

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal__container {
        background-color: var(--color-white-primary);
        padding: 1rem;
        border-radius: 4px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }

    .modal-close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: var(--color-black-primary);
        color: var(--color-white-primary);
        border: none;
        cursor: pointer;
        border-radius: var(--button-radius);
        font-size: 20px;
    }
`;
