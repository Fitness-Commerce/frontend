import { styled } from "styled-components";

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70%;
    padding: 0 100px;

    svg {
        color: var(--color-bright-black);
        margin-right: 1rem;
    }

    .info-text {
        font-size: var(--text-size-small);
        font-weight: 500;
        color: gray;
        margin-bottom: 1rem;
    }
    .modify-btn {
        cursor: pointer;
        border: 1px solid black;
        border-radius: 4px;
        color: white;
        background-color: rgb(116,116,116);
        font-weight: 100;
        &:hover {
            background-color: rgb(80,80,80);
        }
    }
    @media (max-width: 1024px) { 
	    /* 테블릿 크기에서의 스타일 */ 
        width: 100%;
        padding: 0;
        margin-top: 3rem;
    }

    @media (max-width: 768px) { 
        /* 모바일 크기에서의 스타일 */ 
    }
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: column;
    /* 사진, 이름, 메일주소 */
    .user-data__name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--padding-default) 0;
        border-bottom: 1px solid gray;

        .user-data__name__front {
            display: flex;
            img {
                width: 56px;
                border-radius: 100%;
            }

            .user-data__name__front__data {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding-left: 1rem;

                .name {
                    font-size: var(--text-size-large);
                    font-weight: bold;
                }
                .email {
                    font-size: var(--text-size-small);
                    color: gray;
                }
            }
        }
    }
    .user-data__oneline {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--padding-default) 0;
        border-bottom: 1px solid gray;
    }

    /* 메일주소 */
    .user-data__email {
        border-bottom: 1px solid gray;
    }
    /* 패스워드 */
    .user-data__password {
        padding-bottom: 0;
        border: none;
    }
`;

export const Residence = styled.div`
    display: flex;
    flex-direction: column;

    /* 지역 정보 관리 */
    strong {
        font-size: var(--text-size-medium);
        font-weight: 500;
        padding: var(--padding-default);
        padding-left: 0;
    }

    /* 위치 정보 박스내부 */
    .residence {
        display: flex;
        flex-direction: column;

        /* 주소 */
        .residence__address {
            display: flex;
            flex-direction: column;
            padding-bottom: var(--padding-default);
            border-bottom: 1px solid gray;
        
            .residence__address__data {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            
                /* 주소가 적히는 곳 */
                .residence__address__data__show-location {
                    display: flex;
                    flex-direction: row;
                    line-height: 1.2;
                    .address-space {
                        display: flex;
                        flex-direction: column;
                        .address-detail {
                            font-size: 14px;
                        }
                    }
                }
                /* 주소변경 버튼 */
                .modify-btn {
                    height: max-content;
                }
            }
        }

        /* 거래범위 */
        .range {
            display: flex;
            flex-direction: column;
            padding-bottom: var(--padding-default);
            .range__header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: var(--padding-default) 0;
            }
            .range__current {
                display: flex;
                .range__current__area-range {
                    /* 거래 지역 */
                    .location-item {
                        white-space: nowrap;
                        display: inline-block;
                        font-size: var(--text-size-small);
                        margin-right: 10px;
                        padding: 5px;
                        margin-bottom: 5px;
                        border-radius: 5px;
                        border: 1px solid black;
                        color: var(--color-black-primary);
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) { 
	    /* 테블릿 크기에서의 스타일 */ 
    }

    @media (max-width: 768px) { 
        /* 모바일 크기에서의 스타일 */ 
        .address-main {
            font-size: 14px;
        }
        .modify-btn-address {
            font-size: small;
            white-space: nowrap;
        }
    }
`;