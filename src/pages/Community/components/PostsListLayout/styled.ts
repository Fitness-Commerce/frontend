import { styled } from "styled-components";

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 2px solid rgba(0, 0, 0, .2);
`

export const PostList = styled.li`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 24px 16px;
    border-bottom: 1px dotted rgba(0, 0, 0, .2);
    color: var(--color-bright-black);

    .post-list__title {
        flex-basis: 70%;
        text-align: start;
    }
    
    .post-list__author,
    .post-list__created-at,
    .post-list__view-count {
        flex-basis: 10%;
        text-align: center;
    }

    /* 박스 전체가 아닌 글자만 포인터 커서로 보이게 하는 용도 */
    .post-list__title,
    .post-list__author {
        span {
            cursor: pointer;
        }
    }
`