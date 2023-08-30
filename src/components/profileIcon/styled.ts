import { styled } from "styled-components";


export const Profile = styled.div`
    display: flex;
    
    .profile-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .user-profile-wrapper {
        &::after {
            position: absolute;
            top: 100%;
            left: 0;
            content: "";
            width: 100%;
            height: 12px;
        }
        &:hover ~ .dropdown {
            opacity: 1;
            visibility: visible;
        }
    }

    .user-profile {
        cursor: pointer;
        border-radius: 100%;
        height: 50px;
    }

    .dropdown {
        position: absolute;
        z-index: 999;
        display: flex;
        flex-direction: column;
        top: calc(100% + 12px);
        left: 0;
        width: 200px;
        height: fit-content;
        padding: 1rem 0;
        border-radius: var(--button-radius);
        background-color: var(--color-black-primary);
        color: var(--color-white-primary);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease;

        a {
            color: var(--color-white-primary);
            text-decoration: none;
        }

        &:hover {
            opacity: 1;
            visibility: visible;
        }

        ul {
            font-size: 14px;
            font-weight: 300;
        }
        .ul-profile {
            padding-top: 0;
            padding-bottom: 1rem;
            border-bottom: 0.1px solid gray;
        }
        .ul-center {
            padding: 1rem 0;
        }
        .ul-logout {
            padding-top: 1rem;
            padding-bottom: 0;
            border-top: 0.1px solid gray;
        }

        li {
            padding: 0 1.5rem;
            line-height: 30px;
            &:hover {
                background-color: var(--color-opacity-white);
            }
        }
    }


    .dashboard {
        cursor: pointer;
        border: 1px solid black;
        border-radius: var(--button-radius);
        padding: 0 24px;
        margin-left: 2rem;
        background-color: transparent;
        height: 48px;
        font-size: medium;
        font-weight: 200;
        transition: .3s;

        &:hover {
            color: var(--color-white-primary);
            background-color: var(--color-black-primary);
        }
    }
`;
