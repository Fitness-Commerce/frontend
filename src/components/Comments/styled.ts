import styled from "styled-components";

export const CommentContainer = styled.div`
    margin-top: 5vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    /* justify-content: center; */

    h2 {
        display: flex;
        gap: 6px;
        width: 100%;
        padding: 8px 12px;
        box-shadow: 0 0 2px 2px;
        align-items: center;
        border-radius: var(--button-radius);
        background-color: var(--color-bright-gray);
        color: white;
    }

    form {
        width: 100%;
        display: flex;
        padding: 0px 5vw;
        gap: 6px;
        align-items: center;

        textarea {
            flex-grow: 1;
            border-radius: var(--button-radius);
            outline-color: var(--color-accent-dark-green);
        }

        button {
            padding: 12px 16px;
            outline: none;
            color: white;
            font-size: 0.9rem;
            font-weight: bold;
            border-radius: var(--button-radius);
            background-color: var(--color-bright-gray);
        }

        .comment_form_login-alert {
            padding: 6px 8px;
            color: gray;
            font-size: 0.9rem;
        }
    }
`;

export const CommentContent = styled.div`
    width: 100%;
    display: flex;
    padding: 0px 2vw;
    gap: 12px;

    .comment_profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6px;

        img {
            width: 5vw;
            border-radius: 9999px;
        }

        span {
            color: gray;
        }
    }

    .comment_details {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
        
        p {
            display: inline-block;
            flex-grow: 1;
            padding: 6px 8px;
            background-color: white;
            border-radius: var(--button-radius);
            box-shadow: 0 0 1px 2px;
        }

        span {
            margin-left: 6px;
            display: inline-block;
            align-self: flex-end;
            color: gray;
            font-size: 0.8rem;
        }
    }
`;

export const Separator = styled.div`
    margin-top: 2vh;
`