import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Nav = styled.nav`
    .nav-wrapper {
        display: flex;
        width: 100%;
        height: 60px;
        gap: 16px;
        align-items: center;
        .nav-wrapper__category-btn {
            background-color: transparent;
            border: none;
            padding: 0;
            display: flex;
            align-items: center;
            .nav-wrapper__category-btn__text {
                margin-left: 8px;
                font-size: 16px;
            }
        }
    }
`;

export const Link = styled(NavLink)`
    flex: 0, 0, 0%;
    &.active {
        text-decoration: underline;
        text-underline-offset: 5px;
    }
`