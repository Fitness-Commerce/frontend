import { useState } from "react";
import { styled } from "styled-components";

// constance
import { KOREALOCATION } from "../../contance/koreaData.ts";

// select range component
import SelectRange from "./SelectRange.tsx";


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
            outline: none;
        }
        select {
            outline: none;
        }
        .form__label-wrapper {
            height: 1rem;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
        }
        label {
            color: var(--label-color);
            font-size: var(--label-text-size);
            font-weight: var(--label-font-weight);
            
            text-transform: uppercase;
        }
        .form__required {
            color: red;
            margin-left: .25rem;
            font-size: var(--label-text-size);
            font-weight: var(--label-font-weight);
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
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .form__range__label-wrapper {
                display: flex;
                margin-bottom: 8px;
                .form__range__p {
                    font-size: var(--label-text-size);
                    font-weight: var(--label-font-weight);
                    margin-left: 1rem;
                    opacity: 0;
                }
                .form__range__label {
                    color: black;
                    &:hover ~ .form__range__p {
                        opacity: 1;
                    }
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
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

    // Area_range
    const [selectRangeComponents, setSelectRangeComponents] = useState<JSX.Element[]>([]);
    // const [areaRange, setAreaRange] = useState<string[]>([]);

    const onClickAddRange = () => {
        setSelectRangeComponents((prevComponents) => [
            ...prevComponents,
            <SelectRange key={prevComponents.length} />
        ])
    }

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
                <span className="form__label-wrapper"><label htmlFor="email">email</label><span className="form__required">*</span></span>
                <input 
                    type="email" required 
                    placeholder="E-mail" id="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                />

                {/* ID / PASSWORD */}
                <div className="form__password">
                    <div>
                        <span className="form__label-wrapper"><label htmlFor="password">password</label><span className="form__required">*</span></span>
                        <input 
                            type="password" required 
                            placeholder="Password" id="password" 
                            onChange={(e) => setPassword1(e.target.value)} 
                        />
                    </div>
                    <div>
                        <span className="form__label-wrapper"><label htmlFor="repeat-password">check password</label><span className="form__required">*</span></span>
                        <input
                            type="password" required 
                            placeholder="Repeat Password" id="repeat-password" 
                            onChange={(e) => setPassword2(e.target.value)} 
                        />
                    </div>
                    <span className="password-lead">동일한 비밀번호를 입력해주세요</span>
                </div>
                

                {/* 전화번호 */}
                <span className="form__label-wrapper"><label htmlFor="phone">휴대전화</label><span className="form__required">*</span></span>
                <input 
                    className="form__phone"
                    name="phone" type="number"
                    required inputMode="numeric"
                    pattern="[0-9]*" placeholder="Phone Number" 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                />

                {/* 이름 */}
                <span className="form__label-wrapper"><label htmlFor="username">이름</label><span className="form__required">*</span></span>
                <input 
                    name="username" type="text" inputMode="text"
                    required placeholder="Username" 
                    onChange={(e) => setUsername(e.target.value)} 
                />

                {/* 닉네임 */}
                <span className="form__label-wrapper"><label htmlFor="nickname">닉네임</label><span className="form__required">*</span></span>
                <input 
                    name="nickname" type="text" 
                    required placeholder="Nickname" 
                    onChange={(e) => setNickname(e.target.value)}
                />
                
                {/* 주소 선택 */}
                <span className="form__label-wrapper"><label htmlFor="address">주소</label><span className="form__required">*</span></span>
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

                {/* 거래가능 지역 추가 */}
                <div className="form__range">
                    <span className="form__range__label-wrapper">
                        <label className="form__range__label" onClick={onClickAddRange}>거래지역 추가</label>
                        <p className="form__range__p">로그인 후 회원 수정 페이지에서 추가 및 수정이 가능합니다.</p>
                    </span>

                    <div className="form__range__array-wrapper">
                    {
                        selectRangeComponents?.map((SelectComponent) => SelectComponent)
                    }
                    </div>
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