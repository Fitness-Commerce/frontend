import { useEffect, useState } from "react";
import { styled } from "styled-components";

// constance
import { KOREALOCATION } from "../../contance/koreaData.ts";

// select range component
import SelectRange from "./SelectRange.tsx";

// Recoil
import { rangeListAtom } from "../../recoil/signup/atom.ts";
import { useRecoilState } from "recoil";
import axios from "axios";
import { ILoginModalProp } from "./LoginModal.tsx";
import { REGISTER } from "../../contance/endPoint.ts";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const StyledSignUpForm = styled.div<IProps>`
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
                border-bottom: ${props => props.isshowmessage === 'true' ? '1px solid red;' : 'none;'}
            }

            .password-lead {
                opacity: ${props => props.isshowmessage === 'true' ? 1 : 0};
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
            #remove-range {
                cursor: pointer;
                border: none;
                background-color: transparent;
            }
        }

        /* 회원가입 제출 버튼 */
        .form__input-submit {
            background-color: var(--color-button-bg-black);
            color: var(--color-white-primary);
            padding: 1rem;
            margin-bottom: 1rem;
            margin-top: 1rem;
            border: none;
            border-radius: var(--button-radius);
            outline: none;
            &:hover {
                background-color: var(--color-button-bg-hover);
            }
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

const SignUpForm = ({setIsLoginModalOpen, onClickFn}: ILoginModalProp) => {
    // SignForm state
    const [email, setEmail] = useState("");
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
    const [detailAddress, setDetailAddress] = useState("");


    // Area_range
    const [selectRangeComponents, setSelectRangeComponents] = useState<JSX.Element[]>([]); // select 추가 담당
    const [areaRangeList, setAreaRangeList] = useRecoilState(rangeListAtom);


    const onClickAddRange = () => {
        setSelectRangeComponents((prevComponents) => [
            ...prevComponents,
            <SelectRange
                key={prevComponents.length}
                index={prevComponents.length}
                setSelectRangeComponentsFn={setSelectRangeComponents}
            />
        ])
    }

    const onClickSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let address = '';
        address += sido.filter(e => e.sido === val1)[0].codeNm + ' ';
        address += sigugun.filter(e => e.sido === val1 && e.sigugun === val2)[0].codeNm + ' ';
        address += dong.filter(e => e.sido === val1 && e.sigugun === val2 && e.dong === val3)[0].codeNm;

        if(password1 !== password2) return;

        const SignUpData = {
            "email" : email,
            "password" : password1,
            "role": "USER",
            "phoneNumber" : phoneNumber,
            "username" : username,
            "nickname" : nickname,
            "address" : {
                "front_address" : address,
                "detailed_address" : detailAddress
            },
            "area_range" : areaRangeList
        }

        axios.post(REGISTER, SignUpData)
            .then((response) => {
                console.log(response);
                alert('정상적으로 회원가입 되었습니다.');
                setIsLoginModalOpen(false);
            })
            .catch((error) => {
                if(error.response.data.message === "잘못된 요청입니다.") {
                    const obj = error.response.data;
                    const key = Object.keys(obj.validation)[0];
                    alert(obj.validation[key]);
                }
                else {
                    alert(error.response.data.message);
                }
            });
    }

    useEffect(() => {
        return () => {
            setAreaRangeList([]);
        }
    }, [setAreaRangeList])

    return (
        <StyledSignUpForm isshowmessage={`${leadPassword}`}>
            <FontAwesomeIcon icon={faXmark} className="form__close" onClick={() => setIsLoginModalOpen(false)} />
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
                            onChange={(e) => {
                                setPassword1(e.target.value);
                                if(password1 === e.target.value) {
                                    setLeadPassword(false);
                                } else setLeadPassword(true);
                            }} 
                        />
                    </div>
                    <div>
                        <span className="form__label-wrapper"><label htmlFor="repeat-password">check password</label><span className="form__required">*</span></span>
                        <input
                            type="password" required
                            placeholder="Repeat Password" id="repeat-password" 
                            onChange={(e) => {
                                setPassword2(e.target.value);
                                if(password1 === e.target.value) {
                                    setLeadPassword(false);
                                } else setLeadPassword(true);
                            }} 
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
                <span className="form__label-wrapper"><label htmlFor="detail">상세주소</label></span>
                <input type="text" name="detail" onChange={(e) => setDetailAddress(e.target.value)} value={detailAddress} />

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
            <span className="container__left__guide">
                이미 회원이신가요? <button onClick={() => { onClickFn(true) }} className="container__left__guide__btn">로그인</button>
            </span>
        </StyledSignUpForm>
    );
}

export default SignUpForm;

interface IProps {
    isshowmessage: string,
}