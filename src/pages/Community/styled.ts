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
        position: relative;
        font-family: 'Noto Sans KR', sans-serif;
        font-family: 'Jua', sans-serif;
        font-size: 2.5rem;
        font-weight: 500;
        &::before {
            position: absolute;
            bottom: -3px;
            content: "";
            width: 100%;
            height: 3px;
            background-color: black;
        }
    }
`

export const CommunityCategory = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 3rem;
    
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