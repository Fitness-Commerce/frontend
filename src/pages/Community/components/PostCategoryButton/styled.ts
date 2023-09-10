import { Link } from "react-router-dom";

import { styled } from "styled-components";

export const Wrapper = styled.li`
    display: flex;
    flex-basis: 12%;

    .community__post-category-btn {
        display: flex;
        width: 100%;
        padding: 8px 24px;
        background-color: #000;

        &:hover {
            filter: brightness(80%);
        }
    }
`;

export const CategoryLink = styled(Link)`
    flex-shrink: 0;
    color: #fff;
    text-align: center;
`;
