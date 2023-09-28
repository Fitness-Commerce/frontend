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
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    gap: 8px;
    `;

export const ChatList = styled.div`
    position: relative;
    width: 300px;
    height: 500px;
    overflow-y: scroll;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .list-btn {
        border-radius: var(--button-radius);
        outline: none;
        border-color: transparent;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.7);
    }
`;

export const ChatRoom = styled.form`
    position: relative;
    width: 300px;
    height: 500px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
/* 
    .message-container {
        width: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
    } */
`;

interface MessageContainerProps {
    $isUser: boolean;
}

export const MessageContainer = styled.div<MessageContainerProps>`
    justify-content: ${props => props.$isUser ? "end" : "start"};

`

export const Message = styled.p`
    max-width: 200px;
    padding: 8px;
    border-radius: var(--button-radius);
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.5);
    background-color: yellow;
`
