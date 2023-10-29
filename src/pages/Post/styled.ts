import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const Container = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    max-width: 600px;
    width: 100%;
    flex-direction: column;
    gap: 24px;

    .post__hr {
        display: block;
        color: rgb(0, 0, 0);
    }
`

export const ContentContainer = styled.div`
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    border: 1px dotted rgba(0, 0, 0, 0.4);
    border-top: 2px solid var(--color-accent-dark-green);
    border-radius: var(--button-radius);
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
`

export const Title = styled.div`
    display: flex;
    border-bottom: 1px dotted rgba(0, 0, 0, 0.4);
    padding: 12px;
    font-size: 1.2rem;
    font-weight: 500;
    width: 100%;
    justify-content: center;
`

export const Board = styled.div`
    display: flex;
    font-size: 2rem;
    font-weight: 600;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    padding: 24px;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.9rem;
    width: 100%;
    gap: 12px;

    .post__modify-btn,
    .post__delete-btn {
        padding: 6px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        outline: none;
        border: 1px solid transparent;
        border-radius: var(--button-radius);
        &:hover {
            filter: brightness(90%);
        }
        
        cursor: pointer;
    }
    
    .post__modify-btn {
        color: var(--color-accent-dark-green);
        box-shadow: 0 0 3px 0px var(--color-accent-dark-green);
        background-color: var(--color-accent-bright-green);
        flex-grow: 3;
    }

    .post__delete-btn {
        color: white;
        box-shadow: 0 0 2px 1px var(--color-bg-white);
        background-color: rgba(0, 0, 0, 0.2);
        flex-grow: 1;
    }
`