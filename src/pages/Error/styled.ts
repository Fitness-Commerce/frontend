import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 100%;
    height: 90vh;

    .error-title {
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        gap: 0.8rem;
        color: transparent;
        font-size: 6rem;
        font-weight: 900;
        letter-spacing: 6px;
        padding-bottom: 0.5rem;
        background-clip: text;
        background: linear-gradient(90deg, #787876,#323202,#787876,#323202,#787876,#323202);
        background-size: 170% 170%;
        animation: gradient-animation 5s linear infinite;
        -webkit-background-clip: text;

        .error-content-en {
            display: inline-block;
            letter-spacing: 2px;
            font-size: 2rem;
            font-weight: 600;
        }
    }

    .error__btn-container {
        display: flex;
        width: 50%;
        padding: 2rem 2rem;
        gap: 2rem;
        
        .error__home-btn,
        .error__previouspage-btn {
            display: flex;
            flex-grow: 1;
            padding: 0.8rem;
            align-items: center;
            justify-content: center;
            border: none;
            border-top: 2px solid black;
            border-bottom: 2px solid black;
            background-color: transparent;
            
            span {
                flex-shrink: 1;
                font-size: 1.2rem;
                font-weight: 600;
                cursor: pointer;

                &:hover {
                    color: var(--color-bright-black);
                }
            }
        }
    }

    @keyframes gradient-animation {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 97% 50%;
        }
    }
`;
