import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin: auto;

    label {
        margin-top: 6px;
        display: inline-block;
        width: fit-content;
        padding: 6px 8px;
        color: white;
        background-color: var(--color-black-primary);
        border-radius: var(--button-radius);

        cursor: pointer;
    }
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

<<<<<<< Updated upstream
export const UploadLabelContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    label {
        margin-top: 6px;
        display: flex;
        width: fit-content;
        padding: 6px 8px;
        color: white;
        gap: 4px;
        background-color: var(--color-black-primary);
        border-radius: var(--button-radius);

        &:hover {
            filter: brightness(0.9);
        }

        cursor: pointer;
    }

    p {
        color: gray;
        font-size: 0.9rem;
        display: inline-block;
    }
`;

=======
>>>>>>> Stashed changes
export const FileInput = styled.div`
    border: 1px solid var(--color-accent-blue);
    border-radius: 4px;
    margin-bottom: 10px;
<<<<<<< Updated upstream
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    color: gray;

=======
>>>>>>> Stashed changes
    
    input {
        display: none;
    }
    svg {
        margin-right: 10px;
    }
<<<<<<< Updated upstream
    
    .product_file-container {
        display: flex;
        align-items: center;
        border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
        gap: 6px;
        
        &:nth-last-child(1) {
            border-bottom: none;
        }

        .product_file-name {
            cursor: pointer;

            &:hover {
                text-decoration: underline;
                text-underline-offset: 4px;
            }
        }

        .product_file-preview {
            margin-right: 6px;
            display: inline-block;
            width: 10vw;
            height: 10vh;
            object-fit: contain;
        }

        .product_file-delete-btn {
            background-color: transparent;
            opacity: 0.7;
            padding: 0px;
            border: none;
            color: red;
            font-size: 1.4rem;
            font-weight: bold;

            &:hover {
                cursor: pointer;
                opacity: 1;
                filter: brightness(1);
            }
        }
=======
    label {
        padding: 20px;
        display: flex;
        width: 100%;
        color: gray;
        &:hover { cursor: pointer;}        
>>>>>>> Stashed changes
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
