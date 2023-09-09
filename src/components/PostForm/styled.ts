import { styled } from "styled-components";

export const Container = styled.form`
    display: flex;
    margin: 0 auto;
    max-width: fit-content;
    flex-direction: column;
    align-items: center;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    padding-bottom: 20px;
    width: 100%;
`;

export const TitleInput = styled.input`
    flex-grow: 1;
    width: 80%;
    padding: 10px;
    border-radius: 8px;
`;

export const CategorySelect = styled.select`
    display: inline-block;
    border-radius: 8px;
    padding: 2px 6px;
    cursor: pointer;
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1rem;
`;

export const SubmitButton = styled.button`
    flex-grow: 1;
    margin-top: 20px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      filter: brightness(85%);
    }
`;

export const CancleButton = styled.button`
    flex-grow: 1;
    margin-top: 20px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      filter: brightness(85%);
    }
`;