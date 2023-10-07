import { styled } from "styled-components";

export const CommunitySideMargin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 15%;
`;

export const CommunityTitle = styled.div`
    display: flex;
    width: 100%;
    padding: 24px 0;
    justify-content: center;
    margin-top: 5%;

    .community__title {
        font-size: 24px;
        font-weight: 500;
    }
`

export const CommunityCategory = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 3rem 0;
    .community__post-boards-wrapper {
        display: flex;
        justify-content: space-between;
    }
`
export const CommunityBottom = styled.div`
    display: flex;
    justify-content: space-between;
    .community-bottom__empty { 
        opacity: 0%;
        user-select: none;
    }
    .community-bottom__write-btn {
        padding: 0;
        color: var(--color-white-primary);
        background-color: var(--color-black-primary);
        border: none;
        outline: none;
        padding: 5px;
        border-radius: var(--button-radius);
    }
`