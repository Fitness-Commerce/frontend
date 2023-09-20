import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    bottom: 6vh;
    right: 1vw;
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ChatButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: fit-content;

    border-radius: 9999px;
    border-color: transparent;

    background-color: blue;
    padding: 8px;

    transition: filter 0.2s ease;

    cursor: pointer;

    &:hover {
        filter: brightness(90%);
    }
`;

export const ChatContainer = styled.div`
    display: flex;
    gap: 8px;
`;

export const ChatList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ChatRoom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;


