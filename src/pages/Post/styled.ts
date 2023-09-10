import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const Container = styled.div`
    display: flex;
    width: 600px;
    flex-direction: column;
    gap: 12px;

    .post__hr {
        display: block;
        color: rgb(0, 0, 0);
    }
`

export const Title = styled.div`
    display: flex;
    font-size: 1.4rem;
    font-weight: 500;
    width: 100%;
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
`