import { styled } from "styled-components";

export const Container = styled.div`
    margin: 0 12vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    display: flex;
    width: transparent;
    padding: 24px 0;
    gap: 24px;

    .trade__info-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;

        .trade__title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--color-black-primary);
        }

        .trade__price {
            font-size: 2.5rem;
            font-weight: 900;
            color: var(--color-black-primary);

            .trade__price__won {
                font-size: 1.5rem;
                font-weight: 700;
                color: var(--color-bright-black);
            }
        }

        .trade__details {
            display: flex;
            gap: 0.5rem;
            width: 100%;
            flex-direction: row;
            align-items: center;

            .trade__details__view-count,
            .trade__details__created-at,
            .trade__details__report-btn {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-shrink: 0;
                gap: 0.2rem;
                font-size: .9rem;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.5);
            }

            /* 신고버튼 오른쪽 정렬용 */
            .trade__details__created-at {
                flex-grow: 1;
            }
            
            /* 신고하기 버튼 */
            .trade__details__report-btn {
                border: none;
                font-size: .9rem;
                background-color: transparent;

                cursor: pointer;
            }
        }
        
        /* 아이콘 */
        .trade__icon {
            display: inline-block;
            width: 1.2rem;
            height: 1.2rem;
            filter: invert(50%);
        }

        /* 거래 지역 */
        .trade__area-range {
            display: flex;
            align-items: center;
            gap: 0.2rem;
            font-size: 8px;
            font-weight: 700;
            color: var(--color-black-primary);
        }

        /* 거래 버튼 컨테이너 */
        .trade__btn-container {
            display: flex;
            gap: 1rem;
            width: 100%;

            /* 버튼 공통 속성 */
            .trade__consider-btn,
            .trade__chat-btn {
                flex: 1 1 0%;
                font-size: 2rem;
                font-weight: 600;
                border: none;
                border-radius: var(--button-radius);
                color: #fff;
                transition: filter, opacity 0.2s ease-out;

                &:hover :active {
                    filter: brightness(80%);
                }
                
                &:disabled {
                    display: none;
                }

                cursor: pointer;
            }

            /* 찜하기 버튼*/
            .trade__consider-btn {
                background-color: var(--color-gray);
            }

            /* 채팅방 버튼 */
            .trade__chat-btn {
                background-color: var(--color-accent-dark-green);
            }
        }
    }
`;
