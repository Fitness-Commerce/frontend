import { styled } from "styled-components";

export const Header = styled.header`
    position: fixed;
    display: flex;
    top: 0;
    width: 100%;
    height: 10vh;
    padding: 0 5vw;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    
    .header__logo {
        display: flex;
        align-items: center;
        .header__logo-img {
            width: 40px;
            height: 40px;
            margin-right: 10px;
        }
        .header__logo-name {
            font-size: 1.5rem;
            font-weight: 500;
        }
    }

    .header__search {
        position: relative;
        min-width: 512px;
        .header__search__form {
            display: flex;
            align-items: center;
            .header__search__form__input {
                width: 100%;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 6px;
                padding: 2px 16px;
                padding-right: 74px;
                color: #303030;
                background-color: #F4F4F4;
                font-size: 14px;
                font-weight: 400;
                border: none;
                outline: none;
                &:focus {
                    box-shadow: 0 0 0 1px inset #ffe84a;
                }
            }
            button {
                position: absolute;
                outline: none;
                border: none;
                padding: 0;
                background-color: transparent;
            }
            .header__search__form__button-remove {
                fill: #ADADAD;
                right: 40px;
                opacity: 0;
            }
            .header__search__form__button-search {
                right: 13px;
            }
        }
    }
    .header__login {
        font-size: 12px;
        font-weight: 700;
        align-items: center;
        width: max-content;
        height: 44px;
        padding: 6px 12px;
        border: 1px solid;
        border-radius: 4px;
        color: rgb(25,25,25);
        background-color: transparent;
    }
`;

