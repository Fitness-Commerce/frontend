import styled from "styled-components";

export const ProfilePage = styled.div`
    display: flex;
    flex-direction: row;
    background-color: var(--color-profile-bg-white);
    margin: 0 15%;
    color: var(--color-black-primary);
`;


export const ProfilePageLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100vh;
    padding: 0 1.5rem;
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 5px 1px 8px 0 rgb(0 0 0 / 6%);

    .profile-page__left__title {
        font-size: var(--text-size-large);
        font-weight: bold;
        color: var(--color-black-primary);
        padding: 3rem 0;
        a {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }
    .profile-page__left__logout {
        cursor: pointer;
        margin: 3rem 0;
        font-size: var(--text-size-small);
        font-weight: 300;
        span {
            font-size: var(--text-size-small);
        }
    }
`;

export const UserProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 40%;
        border-radius: 70%;
        border: 1px solid var(--color-accent-blue);
        margin: 1rem 0;
    }
    .nickname {
        font-size: var(--text-size-large);
        font-weight: 500;
        margin-bottom: 1rem;
    }
    .email {
        font-size: var(--text-size-small);
        color: var(--color-bright-black);
    }
`;

export const Ul = styled.ul<IUlProp>`
    font-size: var(--text-size-medium);
    font-weight: 500;
    padding: 5rem 0;
    display: grid;
    grid-gap: 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    svg {
        margin-right: 10px;
    }
    li {
        position: relative;
        cursor: pointer;
        width: max-content;
    }
    li::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: -5px;
        left: 0;
        background-color: var(--color-black-primary);
        opacity: 0;
    }
    
    .${props => props.location} {
        &::after {
            opacity: 1;
        }
    }
`;

interface IUlProp {
    location: string;
}