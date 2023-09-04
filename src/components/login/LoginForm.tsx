import axios from "axios";
import { useState } from "react";
import { styled } from "styled-components";
import { ILoginModalProp } from "./LoginModal";

const StyledLoginForm = styled.div`
    width: 100%;
    height: max-content;
    h1 {
        font-size: var(--text-size-large);
        margin-bottom: 3rem;
    }
    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        input {
            margin: 0px; 
            padding: 12px;
            margin-bottom: 2rem;
        }
        label {
            color: var(--label-color);
            font-size: var(--label-text-size);
            font-weight: var(--label-font-weight);
            margin-bottom: 8px;
        }
        .form__input-login {
            height: var(--height-input);
            padding: 0 1rem;
            background-color: white;
            border: none;
            outline: none;
        }
        .form__input-checkbox {
            margin-right: 8px;
        }
        .form__input-submit {
            background-color: var(--color-button-bg-black);
            color: var(--color-white-primary);
            padding: 1rem;
            border: none;
            border-radius: var(--button-radius);
            outline: none;
            &:hover {
                background-color: var(--color-button-bg-hover);
            }
        }
    }
`;

const LoginForm = ({setIsLoginModalOpen}: ILoginModalProp) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const onClickLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const Data = {
            email: email,
            password: pass
        };
        console.log(`Data: ${Data}`);
        axios.post('api/auth/login', Data)
        .then((response) => {
            console.log(response);
            setIsLoginModalOpen(false);
        })
        .catch(error => console.error(error));
    }

    return (
        <StyledLoginForm>
            <h1>Log in</h1>
            <form onSubmit={onClickLogin}>
                <label className="form__label-login">Email or Username</label>
                <input className="form__input-login" type="email"
                    placeholder="Email or Username"
                    onChange={(e) => {setEmail(e.target.value)}}
                />

                <label className="form__label-login">Password</label>
                <input className="form__input-login" type="password"
                    placeholder="Password" 
                    onChange={(e) => {setPass(e.target.value)}}
                />

                <span>
                    <input className="form__input-checkbox" type="checkbox" id="remember-check" />
                    <label htmlFor="remember-check">Remember</label>
                </span>
                
                <input className="form__input-submit" type="submit" value="Log In" />
            </form>
        </StyledLoginForm>
    );
}

export default LoginForm;
