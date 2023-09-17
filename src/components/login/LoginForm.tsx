import axios from "axios";
import { useState } from "react";
import { styled } from "styled-components";
import { ILoginModalProp } from "./LoginModal";
import { useSetRecoilState } from "recoil";
import { isLogin } from "../../recoil/login/atom";
import { LOGIN } from "../../contance/endPoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const StyledLoginForm = styled.div<IShowError>`
    width: 100%;
    height: max-content;
    .form__close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: large;
        background-color: transparent;
        border: none;
        padding: 5px;
        &:hover {
            color: gray;
        }
    }
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
    .container__left__guide {
        display: none;
    }
    @media (max-width: 1024px) { 
        /* 테블릿 크기에서의 스타일 */ 
        .container__left__guide {
            display: block;
            .container__left__guide__btn {
                cursor: pointer;
                position: relative;
                padding: 0;
                border: none;
                background-color: transparent;
                font-size: var(--text-size-medium);
                width: max-content;
                margin-left: 1rem;
            }
            .container__left__guide__btn::before {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0%;
                height: 2px;
                background-color: var(--color-accent-blue);
                transition: all 0.5s;
            }
            .container__left__guide__btn:hover::before {
                width: 100%;
            }
        }
    }

    @media (max-width: 768px) { 
        /* 모바일 크기에서의 스타일 */ 
    }
`;

const LoginForm = ({ setIsLoginModalOpen, onClickFn }: ILoginModalProp) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // 잘못된 이메일, 패스워스 핸들링 
    const [isShowEmailError, setIsShowEmailError] = useState(false);
    const [isShowPassError, setIsShowPassError] = useState(false);

    const setIsLogin = useSetRecoilState(isLogin);

    const onClickLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const Data = {
            email: email,
            password: pass
        };

        axios.post(LOGIN, Data)
            .then((response) => {
                setIsLoginModalOpen(false);
                localStorage.setItem("accessToken", response.data.accessToken);
                setIsLogin(true);
            })
            .catch((error) => {
                console.error(error);
                const errMsg = error.response.data.message;
                if (errMsg === "해당 이메일을 찾을 수 없습니다.") {
                    setIsShowEmailError(true);
                }
                if (errMsg === "비밀번호가 틀립니다.") {
                    setIsShowPassError(true);
                }
            });
    }
    
    return (
        <StyledLoginForm email={`${isShowEmailError}`} pass={`${isShowPassError}`}>
            <FontAwesomeIcon icon={faXmark} className="form__close" onClick={() => setIsLoginModalOpen(false)} />
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
            <span className="container__left__guide">
                아직 회원이 아니신가요? <button onClick={() => { onClickFn(false) }} className="container__left__guide__btn">회원가입</button>
            </span>
        </StyledLoginForm>
    );
}

export default LoginForm;

interface IShowError {
    email: string,
    pass: string
}
