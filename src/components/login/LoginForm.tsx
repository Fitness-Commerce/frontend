import { styled } from "styled-components";

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
                background-color: var(--color-button-hover);
            }
        }
    }
`;

const LoginForm = () => {
    return (
        <StyledLoginForm>
            <h1>Log in</h1>
            <form>
                <label className="form__label-login">Email or Username</label>
                <input className="form__input-login" type="email" placeholder="Email or Username" />

                <label className="form__label-login">Password</label>
                <input className="form__input-login" type="password" placeholder="Password" />

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
