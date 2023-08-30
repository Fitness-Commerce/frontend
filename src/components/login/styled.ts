import { styled } from "styled-components";

export const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: auto;
    
    .container {
        /* 모달창 크기 */
        width: 80%;
        height: 85%;

        /* 최상단 위치 */
        z-index: 999;

        /* 중앙 배치 */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        /* 스타일 */
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-radius: var(--modal-radius);
        background-color: var(--color-white-primary);

        .container__left {
            padding: 3rem;
            background-color: var(--color-white-primary);
            border-radius: var(--modal-radius) 0 0 var(--modal-radius);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            .container__left__welcome {
                font-size: var(--text-size-large);
            }
            .container__left__title {
                font-size: 200px;
                font-weight: 500;
                text-align: center;
            }
            .container__left__guide {
                .container__left__guide__btn {
                    cursor: pointer;
                    position: relative;
                    padding: 0;
                    margin-left: 1rem;
                    border: none;
                    background-color: transparent;
                    font-size: var(--text-size-medium);
                    width: max-content;
                }
                .container__left__guide__btn::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 2px;
                    background-color: var(--color-accent-blue);
                    transition: all .5s;
                }
                .container__left__guide__btn:hover::before {
                    width: 100%;
                }
            }
        }

        .container__right {
            padding: 3rem;
            border-radius: 0 var(--modal-radius) var(--modal-radius) 0;
            background-color: rgb(248, 248, 248);
        }
    }

    /* close button */
    .modal__close-btn {
        cursor: pointer;
        position: fixed;
        bottom: 2.5%;
        right: 2.5%;
        font-size: large;
        font-weight: bold;
        width: 4rem;
        height: 4rem;
        background-color: var(--color-black-primary);
        color: var(--color-white-primary);
        border: none;
        border-radius: var(--button-radius);
        &:hover {
            background-color: var(--color-button-bg-hover);
        }
    }
`;