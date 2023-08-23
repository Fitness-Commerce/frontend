import { useState } from "react";
import { styled } from "styled-components";

// constance
import { KOREALOCATION } from "../../contance/koreaData.ts";

const StyledSignUpForm = styled.div<IProps>`
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
            border: none;
        }
        label {
            color: var(--label-color);
            font-size: var(--label-text-size);
            font-weight: var(--label-font-weight);
            margin-bottom: 8px;
            text-transform: uppercase;
        }

        /* password */
        .form__password {
            display: flex;
            justify-content: space-between;
            position: relative;
            div {
                display: flex;
                flex-direction: column;
                width: 45%;
            }
            input {
                border-bottom: ${props => props.isShowMessage ? '1px solid red;' : 'none;'}
            }

            .password-lead {
                opacity: ${props => props.isShowMessage ? 1 : 0};
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                color: red;
                font-size: var(--text-size-small);
            }
        }

        /* phone */
        .form__phone {
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
            input[type=number] {
                -moz-appearance: textfield;
            }
        }
        
        /* address */
        .form__address {
            margin-bottom: 2rem;
            select {
                border: none;
                padding: 10px;
                margin-right: 1rem;
            }
        }

        /* range */
        .form__range {
            
        }

        /* 회원가입 제출 버튼 */
        .form__input-submit {
            background-color: var(--color-button-bg-black);
            color: var(--color-white-primary);
            padding: 1rem;
            margin-bottom: 1rem;
            border: none;
            border-radius: var(--button-radius);
            outline: none;
            &:hover {
                background-color: var(--color-button-hover);
            }
        }
    }
`;

const SignUpForm = () => {
    // SignForm state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [leadPassword, setLeadPassword] = useState(false);
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [username, setUsername] = useState("");
    const [nickname, setNickname] = useState("");

    // Location
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    const [val3, setVal3] = useState("");
    const { sido, sigugun, dong } = KOREALOCATION;


    const onClickSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let address = '';
        address += sido.filter(e => e.sido === val1)[0].codeNm + ' ';
        address += sigugun.filter(e => e.sido === val1 && e.sigugun === val2)[0].codeNm + ' ';
        address += dong.filter(e => e.sido === val1 && e.sigugun === val2 && e.dong === val3)[0].codeNm;

        // password check
        if(password1 !== password2) {
            setLeadPassword(true);
            return;
        }
        setPassword(password1);

        return { 
            email,
            password, 
            phoneNumber, 
            username,
            nickname, 
            address 
        };
    }

    return (
        <StyledSignUpForm isShowMessage={leadPassword}>
            <h1>Sign Up</h1>
            <form onSubmit={onClickSubmit}>

                {/* EMAIL */}
                <label htmlFor="email">email</label>
                <input 
                    type="email" required 
                    placeholder="E-mail" id="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                />

                {/* ID / PASSWORD */}
                <div className="form__password">
                    <div>
                        <label htmlFor="password">password</label>
                        <input 
                            type="password" required 
                            placeholder="Password" id="password" 
                            onChange={(e) => setPassword1(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label htmlFor="repeat-password">check password</label>
                        <input
                            type="password" required 
                            placeholder="Repeat Password" id="repeat-password" 
                            onChange={(e) => setPassword2(e.target.value)} 
                        />
                    </div>
                    <span className="password-lead">동일한 비밀번호를 입력해주세요</span>
                </div>
                

                {/* 전화번호 */}
                <label htmlFor="phone">휴대전화</label>
                <input 
                    className="form__phone"
                    name="phone" type="number"
                    required inputMode="numeric"
                    pattern="[0-9]*" placeholder="Phone Number" 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                />

                {/* 이름 */}
                <label htmlFor="username">이름</label>
                <input 
                    name="username" type="text" inputMode="text"
                    required placeholder="Username" 
                    onChange={(e) => setUsername(e.target.value)} 
                />

                {/* 닉네임 */}
                <label htmlFor="nickname">닉네임</label>
                <input 
                    name="nickname" type="text" 
                    required placeholder="Nickname" 
                    onChange={(e) => setNickname(e.target.value)}
                />
                
                {/* 주소 선택 */}
                <label htmlFor="address">주소</label>
                <div className="form__address">
                    {/* 시/도 선택 */}
                    <select name="sido" required onChange={(e) => setVal1(e.target.value)}>
                        <option value="">선택</option>
                        {sido.map((el) => (
                            <option key={el.sido} value={el.sido}>
                                { el.codeNm }
                            </option>
                        ))}
                    </select>

                    {/* 시/군/구 선택 */}
                    <select required onChange={(e) => setVal2(e.target.value)}>
                        <option value="">선택</option>
                        {sigugun
                            .filter((el) => el.sido === val1)
                            .map((el) => (
                                <option key={el.sigugun} value={el.sigugun}>
                                    {el.codeNm}
                                </option>
                            ))}
                    </select>

                    {/* 동 선택 */}
                    <select required onChange={(e) => setVal3(e.target.value)}>
                        <option value="">선택</option>
                        {dong
                            .filter((el) => el.sido === val1 && el.sigugun === val2)
                            .map((el) => (
                                <option key={el.dong} value={el.dong}>
                                    {el.codeNm}
                                </option>
                            ))}
                    </select>
                </div>
                
                {/* 제출하기 */}
                <input className="form__input-submit" type="submit" value="제출하기" />
            </form>
        </StyledSignUpForm>
    );
}

export default SignUpForm;

interface IProps {
    isShowMessage: boolean,
}