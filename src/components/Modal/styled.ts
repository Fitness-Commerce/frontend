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
        border-radius: var(--button-radius);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column; 
        align-items: flex-end;
    }

    .modal-close-btn {
        cursor: pointer;
        width: max-content;
        background-color: transparent;
        color: var(--color-black-primary);
        border: none;
        border-radius: var(--button-radius);
        font-size: 20px;
        padding-top: 1rem;
        padding-right: 1rem;
    }
    

    .modify {
        line-height: 1.2;
        color: black;
        width: 300px;
        height: max-content;
        font-size: var(--text-size-semiLarge);  
        font-weight: 300;
    }
    .bold {
        font-weight: bold;
    }
    .accent {
        color: var(--color-accent-dark-green);
        font-weight: 400;
    }

    .modify__header {
        padding: 1rem;
        padding-bottom: 0;
        .modify__header__container {
            border-bottom: 1px solid gray;
            padding-bottom: 1rem;
        }
    }

    .current {
        font-size: var(--text-size-medium);
        padding: 1rem;
    }
    .modify__input {
        padding: 1rem;
    }
    .input-container {
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.05);
        
        .modify-input {
            background-color: transparent;
            flex: 1;
            border: none;
            outline: none;
        }
        .check-btn {
            cursor: pointer;
            margin-left: 4px;
            border-radius: 4px;
            padding: 4px 8px;
            border: none;
        }
    }    
    .description {
        padding: 1rem 0;
        font-size: var(--text-size-small);
        padding: 1rem;
    }

    .modify__footer, .modify-address__footer {
        display: flex;
        flex-direction: row;
        left: 0;
        color: var(--color-white-primary);
        .modify__footer__cancel {
            cursor: pointer;
            width: 30%;
            background-color: gray;
            padding: 1rem;
            text-align: center;
            border-radius: 0px 0px 0px var(--button-radius);
        }
        .modify__footer__submit, .modify-address__footer__submit {
            cursor: pointer;
            width: 70%;
            background-color: var(--color-accent-dark-green);
            padding: 1rem;
            text-align: center;
            border-radius: 0px 0px var(--button-radius) 0px;
        }
    }
`;
