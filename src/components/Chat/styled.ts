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

    background-color: rgb(83, 149, 233);
    margin-top: 3rem;
    padding: 8px;

    transition: filter 0.2s ease;

    cursor: pointer;

    &:hover {
        filter: brightness(90%);
    }
    svg {
        color: white;
        margin-right: 5px;
    }
    .chat-btn {
        color: white;
        font-weight: 500;
    }
`;

export const ChatContainer = styled.div`
    width: 300px;
    height: 500px;
    display: flex;
    gap: 8px;
    padding: 16px;
    border-radius: var(--button-radius);
    box-shadow: 0 0 2px 1px;

    /* theme */
    background-color: #000;
    color: #fff;
`;

export const ChatList = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    gap: 8px;
    padding-right: 16px;

    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        /* position: fixed; */
        /* right: 0; */
        /* z-index: 9999; */
        border-radius: 4px;
        background: transparent;
        width: 8px;
    }

    &:hover {
        &::-webkit-scrollbar-thumb {
            background: #ccc;
        }
    }

    .chat-list__header__btn {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: transparent;

        border: none;
        outline: none;
        color: var(--color-white-primary);

        .chat-list__header__btn__exit-img {
            position: absolute;
            left: 0;
            filter: invert(100%);
            cursor: pointer;
        }

        .chat-list__header__btn__username {
            font-size: 1.2rem;
        }
    }
`;

export const ChatListPreview = styled.div`
    flex-basis: 1;
    display: flex;
    align-items: center;
    padding: 6px 0px;
    gap: 8px;

    /* left */
    .chat-list-prev__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        .chat-list-prev__img {
            border-radius: 70%;
        }
        .chat-list__chat-room__opponent-nickname {
            font-size: 0.8rem;
            font-weight: 500;
            text-align: center;
        }
    }

    /* middle */
    .chat-list-prev-middle {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        color: #fff;
        background-color: transparent;
        border: none;
        outline: none;
        gap: 6px;

        .chat-list__chat-room__item-name {
            font-size: 1.15rem;
            font-weight: 500;
        }

        .chat-list__chat-room__last-message {
            font-size: 0.7rem;
        }
    }

    /* right */
    .chat-list-prev-right {
        font-size: 0.8rem;
    }

`;

export const ChatRoom = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 24px;
`;

export const ChatRoomHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    .chat-room__go-back-btn {
        filter: invert(100%);
        cursor: pointer;
    }

    .chat-room__title {
        /* display: block; */
        flex-grow: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .chat-room__status-btn {
        padding: 8px 16px;
        border: none;
        border-radius: var(--button-radius);
        background-color: var(--color-accent-bright-green);

        cursor: pointer;
    }

    .chat-room__cancel-btn {
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: var(--button-radius);
        background-color: var(--color-bright-gray);

        cursor: pointer;
    }

    .chat-room__delete-btn {
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: var(--button-radius);
        background-color: var(--color-bright-gray);

        cursor: pointer;
    }

    .chat-room__sold {
        padding: 8px 16px;
        border: none;
        border-radius: var(--button-radius);
        background-color: var(--color-bright-gray);
        color: white;
    }
`;

export const ChatMessageContainer = styled.div`
    color: white;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding: 4px 4px;
    gap: 12px;

    /* 스크롤 스타일 */
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: transparent;
    }

    &:hover {
        &::-webkit-scrollbar-thumb {
            background: #ccc;
        }
    }
`;

interface chatMessageType {
    $isUser: boolean;
}

export const ChatMessage = styled.div<chatMessageType>`
    display: flex;
    align-items: baseline;
    padding: 0 12px;
    flex-direction: ${(props) => (props.$isUser ? "row-reverse" : "row")};
    gap: 8px;

    .chat-message__create-at {
        flex-shrink: 0;
        color: var(--color-gray);
        font-size: 0.8rem;
    }

    .chat-message__message-box {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px 12px;
        background-color: ${(props) =>
            props.$isUser ? "rgb(83, 149, 233)" : "rgb(38,38,38)"};
        color: #fff;
        border-radius: var(--button-radius);
    }
`;

export const ChatForm = styled.form`
    display: flex;
    align-items: center;
    background-color: transparent;
    color: white;
    gap: 8px;
    height: 35px;
    border: 1px solid gray;
    border-radius: 20px;
    padding-left: 12px;

    .chat-form__input {
        flex-grow: 1;
        background-color: transparent;
        color: white;
        outline: none;
        border: none;
        border-right: none;
        caret-color: white;
    }
    .chat-form__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        background-color: linear-gradient(to top right, red, blue);
        border: none;
        padding: 2px;

        .chat-form__btn__send-icon {
            background-color: rgb(83, 149, 233);
            border-radius: 70%;
            padding: 5px;
            fill: white;
        }

        cursor: pointer;
    }
`;
