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
    padding: 16px;
    border-radius: var(--button-radius);
    box-shadow: 0 0 2px 1px;
    background-color: transparent;
`;

export const ChatList = styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ChatRoom = styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    .chat-room__header {
        display: flex;
        width: 100%;

        .chat-room__header__go-back-btn {
            display: flex;
            justify-content: center;
            align-items: center;

            border: none;
        }

        .chat-room__header__title {
            flex-grow: 1;
        }
    }
`;
