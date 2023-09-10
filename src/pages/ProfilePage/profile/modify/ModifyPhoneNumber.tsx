import { styled } from "styled-components";
import { IIsCheck, IProfileData } from "../../../../interface/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAxios } from "../../../../hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UPDATE_PROFILE, VALIDATE_MEMBER_INFO } from "../../../../contance/endPoint";


const StyledModifyPhoneNumber = styled.div<IIsCheck>`
    /* isCheck에 따른 확인버튼 스타일 */
    .check-btn {
        color: white;
        background-color: ${props => props.is_check === 'true' ? 'gray' : 'var(--color-accent-dark-green)'};
    }

    .check-number {
        padding: 1rem;
        font-size: var(--text-size-small);
        font-weight: 500;
        color: red;
    }
`;

const ModifyPhoneNumber = ({data, onClose}: IProfileData) => {
    // 변경하고자 하는 전화번호
    const [number, setNumber] = useState("");
    // 전화번호 중복 체크 여부
    const [isCheck, setIsCheck] = useState(false);
    // 변경 버튼 클릭 여부
    const [isChange, setIsChange] = useState(false);
    // 권한이 필요한 서버요청시 접근할 axios instance
    const request = useAxios();

    const queryClient = useQueryClient();

    const updatePhoneNumber = () => request.put(UPDATE_PROFILE, {...data, phoneNumber: number});

    // 데이터가 유효하지 않은 경우 다시 가져오도록 트리거
    const mutationPhoneNumber = useMutation(updatePhoneNumber, {
        onSuccess: () => {
            queryClient.invalidateQueries(['myProfile']);
        },
        onError: (error) => {
            console.error(error);
        }
    })

    // 전화번호 검증 요청
    const onClickCheck = () => {
        console.log(`변경하고자 하는 전화번호: ${number}`);
        if(number.length < 11) {
            alert('올바른 전화번호를 입력해주세요.');
            return;
        }
        request.put(VALIDATE_MEMBER_INFO, {...data, phoneNumber: number})
            .then((response) => {
                console.log(response);
                setIsCheck(true);
            })
            .catch((error) => {
                alert(error);
            })
    }
    
    const onClickChange = () => {
        setIsChange(true);
        if(isCheck) {
            mutationPhoneNumber.mutate();
        }
    }

    return(
        <StyledModifyPhoneNumber className="modify" is_check={`${isCheck}`}>
            {/* 수정 목록 알려줌 */}
            <h4 className="modify__header">
                <div className="modify__header__container">
                    <strong className="bold">{data.nickname}님</strong> 변경하고자 하는
                    <em className="accent">전화번호</em>를 입력해주세요.
                </div>
            </h4>

            {/* 현재 전화번호 */}
            <div className="current">
                <FontAwesomeIcon icon={faMobileScreenButton} />
                <strong>{data.phoneNumber}</strong>
            </div>

            {/* 변경할 전화번호 입력창(input) */}
            <div className="modify__input">
                <div className="input-container">
                    <input type="number" 
                        id="nickname" 
                        placeholder="변경할 전화번호 입력" 
                        className="modify-input"
                        onChange={(e) => {
                            setNumber(e.target.value);
                            setIsCheck(false);
                        }}
                    />
                    <button
                        className="check-btn"
                        onClick={onClickCheck}
                    >확인</button>
                </div>
            </div>

            {/* 전화번호 설명 */}
            <div className="description">
                <p>변경된 전화번호는 헬스마켓+ 내 알림 등에 사용됩니다.</p>
            </div>

            { !isCheck && isChange ? 
                <div className="check-number">
                    <p>전화번호 중복확인을 진행해주세요.</p>
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
        </StyledModifyPhoneNumber>
    );
}

export default ModifyPhoneNumber;