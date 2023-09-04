import axios from "axios";
import { useState } from "react";
import { styled } from "styled-components";
import { ILoginModalProp } from "./LoginModal";


const StyledLoginForm = styled.div<IShowError>`
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

        /* 입력된 정보가 틀렸을 경우 */
        .email {
            border-bottom: ${props => props.email === 'true' ? "1px solid red" : "none"};
        }
        .password {
            border-bottom: ${props => props.pass === 'true' ? "1px solid red" : "none"};
        }
    }
`;

const LoginForm = ({setIsLoginModalOpen}: ILoginModalProp) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    // 잘못된 이메일, 패스워스 핸들링 
    const [isShowEmailError, setIsShowEmailError] = useState(false);
    const [isShowPassError, setIsShowPassError] = useState(false);


    const onClickLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const Data = {
            email: email,
            password: pass
        };
        
        axios.post('api/auth/login', Data)
        .then((response) => {
            setIsLoginModalOpen(false);
            localStorage.setItem("jwt", response.data.accessToken);
        })
        .catch((error) => {
            console.error(error);
            const errMsg = error.response.data.message;
            if(errMsg === "해당 이메일을 찾을 수 없습니다.") {
                setIsShowEmailError(true);
            }
            if(errMsg === "비밀번호가 틀립니다.") {
                setIsShowPassError(true);
            }
        });
    }
    
    return (
        <StyledLoginForm email={`${isShowEmailError}`} pass={`${isShowPassError}`}>
            <h1>Log in</h1>
            <form onSubmit={onClickLogin}>
                <label className="form__label-login">Email or Username</label>
                <input className="form__input-login email" type="email"
                    placeholder="Email or Username"
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setIsShowEmailError(() => {
                            return false;            
                        });
                    }}
                />

                <label className="form__label-login">Password</label>
                <input className="form__input-login password" type="password"
                    placeholder="Password" 
                    onChange={(e) => {
                        setPass(e.target.value);
                        setIsShowPassError(false);
                    }}
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

interface IShowError {
    email: string,
    pass: string
}
