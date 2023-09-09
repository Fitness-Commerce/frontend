import styled from "styled-components";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { IIsCheck, IProfileData } from "../../../../interface/Profile";
import { UPDATE_PASSWORD } from "../../../../contance/endPoint";
import { useAxios } from "../../../../hooks/useAxios";


const StyledModifyPassword = styled.div<IIsCheck>`
    .input-password-container {
        display: flex;
        flex-direction: column;
        background-color: transparent;

        .modify-input {
            background-color: rgba(0, 0, 0, 0.05);
            padding: 8px;
            border-radius: 8px;
            border: none;
            outline: none;
            margin: 10px 0
        }
        /* 현재 비밀번호 입력창 */
        .password {
            margin-bottom: 20px;
        }
        /* 입력한 새 비밀번호가 동일하지 않을 시 border red */
        .new-password2 {
            border: ${props => props.lead_password === 'true' ? '1px solid red' : 'none'};
        }
        /* 태그 */
        .tag {
            font-size: var(--text-size-small);
            font-weight: 500;
        }
    }


    /* isCheck에 따른 확인버튼 스타일 */
    .check-btn {
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 4px;
        padding: 4px 8px;
        margin-top: 10px;
        color: white;
        background-color: ${props => props.is_check === 'true' ? 'gray' : 'var(--color-accent-dark-green)'};
    }
`;

const ModifyPassword = ({data, onClose}: IProfileData) => {

    // 기존 비밀번호 입력 상태
    const [password, setPassword] = useState("");
    // 변경할 비밀번호
    const [newPassword1, setNewPassword1] = useState("");
    const [newPassword2, setNewPassword2] = useState("");

    // 입력된 새 비밀번호가 동일한지 감지하는 상태
    const [leadPassword, setLeadPassword] = useState(false);

    // 비밀번호 체크 여부
    const [isCheck, setIsCheck] = useState(false);
    // 변경 버튼 클릭 여부
    const [isChange, setIsChange] = useState(false);

    // 권한이 필요한 서버요청시 접근할 axios instance
    const request = useAxios();
    const queryClient = useQueryClient();

    const updatePassword = () => request.put(UPDATE_PASSWORD, {
        "currentPassword": `${password}`,
        "changePassword": `${newPassword1}`,
        "confirmedPassword": `${newPassword2}`
    });

    // 데이터가 유효하지 않은 경우 다시 가져오도록 트리거
    const mutationPassword = useMutation(updatePassword, {
        onSuccess: () => {
            queryClient.invalidateQueries(['myProfile']);
            alert("정상적으로 비밀번호가 변경되었습니다.");
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            console.log(error.response.data.message);
        }
    });

    // 비밀번호 검증
    const onClickCheck = () => {
        if(password.length < 1) {
            alert("현재비밀번호를 입력해주세요.");
            return;
        }
        if(newPassword1.length < 1) {
            alert("변경할 비밀번호를 입력해주세요.");
            return;
        }
        if(newPassword2.length < 1) {
            alert("변경할 비밀번호를 동일하게 입력해주세요")
            return;
        }
        if(newPassword1 !== newPassword2) {
            alert("변경할 비밀번호를 동일하게 입력해주세요")
            return;
        }
        if(newPassword1.length < 8) {
            alert("비밀번호는 최소 8자리 이상이여야 합니다.");
            return;
        }
        setIsCheck(true);
    }

    const onClickChange = () => {
        setIsChange(true);
        if(isCheck) {
            mutationPassword.mutate();
        }
    }

    return (
        <StyledModifyPassword className="modify" is_check={`${isCheck}`} lead_password={`${leadPassword}`}>
            {/* 수정 목록 알려줌 */}
            <h4 className="modify__header">
                <div className="modify__header__container">
                    <strong className="bold">{data.nickname}님</strong> 변경하고자 하는
                    <em className="accent">비밀번호</em>를 입력해주세요.
                </div>
            </h4>

            {/* 비밀번호 */}
            <div className="current">
                <FontAwesomeIcon icon={faLock} />
                <strong>********</strong>
            </div>

            {/* 비밀번호 입력창(input) */}
            <div className="modify__input">
                <div className="input-password-container">
                    {/* 현재 비밀번호 입력 */}
                    <span className="tag">현재 비밀번호</span>
                    <input type="password" 
                        id="nickname" 
                        placeholder="현재 비밀번호 입력" 
                        className="modify-input password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setIsCheck(false);
                        }}
                    />

                    {/* 변경할 비밀번호 입력 */}
                    <span className="tag">변경 비밀번호</span>
                    <input type="password" 
                        id="nickname" 
                        placeholder="변경할 비밀번호 입력" 
                        className="modify-input new-password1"
                        onChange={(e) => {
                            setNewPassword1(e.target.value);
                            setIsCheck(false);
                            if(newPassword2 === e.target.value) {
                                setLeadPassword(false);
                            } else setLeadPassword(true);
                        }}
                    />
                    {/* 변경할 비밀번호 재입력 */}
                    <span className="tag">비밀번호 재입력</span>
                    <input type="password" 
                        id="nickname" 
                        placeholder="변경할 비밀번호 입력 확인" 
                        className="modify-input new-password2"
                        onChange={(e) => {
                            setNewPassword2(e.target.value);
                            setIsCheck(false);
                            if(newPassword1 === e.target.value) {
                                setLeadPassword(false);
                            } else setLeadPassword(true);
                        }}
                    />
                    <button
                        className="check-btn"
                        onClick={onClickCheck}
                    >확인</button>
                </div>
            </div>

            {/* 비밀번호 설정 설명 */}
            <div className="description">
                <p>변경된 전화번호는 헬스마켓+ 내 알림 등에 사용됩니다.</p>
            </div>

            { !isCheck && isChange ?  
                <div className="check-number">
                    <p>비밀번호를 확인해주세요.</p>
                </div>
                : null
            }

            {/* 취소 및 변경 */}
            <div className="modify__footer">
                <span className="modify__footer__cancel" onClick={() => {
                    onClose();
                }}>취소</span>
                <span 
                    className="modify__footer__submit"
                    onClick={onClickChange}
                >변경</span>
            </div>
        </StyledModifyPassword>
    );
}

export default ModifyPassword;