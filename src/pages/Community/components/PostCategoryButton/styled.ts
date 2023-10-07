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
    text-align: center;
`;
