import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin: auto;
`;

export const Input = styled.input`
    border: 1px solid var(--color-black-primary);
    border-radius: 4px;
    outline: none;
    margin-bottom: 20px;
    padding: 10px;
    font-size: medium;
`;

export const Select = styled.select`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid var(--color-black-primary);
    border-radius: 4px;
    outline: none;
`;

export const Textarea = styled.textarea`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid var(--color-black-primary);
    border-radius: 4px;
    outline: none;
`;

export const FileInput = styled.div`
    border: 1px solid var(--color-accent-blue);
    border-radius: 4px;
    margin-bottom: 10px;
    
    input {
        display: none;
    }
    svg {
        margin-right: 10px;
    }
    label {
        padding: 20px;
        display: flex;
        width: 100%;
        color: gray;
        &:hover { cursor: pointer;}        
    }
`;

export const Button = styled.button`
    background-color: var(--color-button-bg-black);
    border: none;
    border-radius: 8px;
    color: white;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 40px;
    cursor: pointer;
    &:hover {
        background-color: var(--color-button-bg-hover);
    }
`;
