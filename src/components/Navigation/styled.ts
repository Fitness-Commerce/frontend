import { styled } from "styled-components";

export const Nav = styled.nav`
    button {
        background-color: transparent;
        border: none;
        font-size: 16px;
    }
    .nav-wrapper {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        .nav-wrapper__category-btn {
            display: flex;
            align-items: center;
            .nav-wrapper__category-btn__text {
                margin-left: 8px;
            }
        }
    }
`;