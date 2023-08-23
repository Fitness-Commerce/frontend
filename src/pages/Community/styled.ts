import { styled } from "styled-components";

export const CommunityTitle = styled.div`
    display: flex;
    width: 100%;
    padding: 24px 0;

    .community__title {
        font-size: 32px;
        font-weight: 900;
    }
`

export const CommunityCategory = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    .community__post-boards-wrapper {
        display: flex;
        padding: 24px 0;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
    }
`