import { Link } from "react-router-dom";

import { styled } from "styled-components";

export const Wrapper = styled.li`
    display: flex;
    .community__post-category-btn {
        background-color: transparent;
        border: none;
        outline: none;
        &:hover {
            filter: brightness(80%);
        }
    }
`;

export const CategoryLink = styled(Link)`
    position: relative;
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Jua', sans-serif;
    font-weight: 100;
    font-size: 1rem;
    text-align: center;
    &:hover {
        &::before {
            opacity: 100;
        }
    }
    &::before {
        position: absolute;
        content: "";
        bottom: -5px;
        width: 100%;
        height: 2px;
        background-color: black;
        opacity: 0;
        transition: .3s;
    }
`;
