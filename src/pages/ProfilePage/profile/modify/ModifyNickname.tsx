import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import { useState } from "react";
import { useAxios } from "../../../../hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { IIsCheck, IProfileData } from "../../../../interface/Profile";
import { VALIDATE_MEMBER_INFO, UPDATE_PROFILE } from "../../../../contance/endPoint";



export const StyledModifyNickname = styled.div<IIsCheck>`
    /* isCheck에 따른 확인버튼 스타일 */
    .check-btn {
        color: white;
        background-color: ${props => props.is_check === 'true' ? 'gray' : 'var(--color-accent-dark-green)'};
    }

    /* 확인버튼을 클릭하지 않고 변경버튼을 누를시 보여질 상태안내문구 */
    .check-nickname {
        padding: 1rem;
        font-size: var(--text-size-small);
        font-weight: 500;
        color: red;
    }
`;

const ModifyNickname = ({data, onClose}: IProfileData) => {
    // 변경하고자 하는 닉네임
    const [value, setValue] = useState("");
    // 닉네임 중복 체크 여부
    const [isCheck, setIsCheck] = useState(false);
    // 변경 버튼 클릭 여부
    const [isChange, setIsChange] = useState(false);

    // 권한이 필요한 서버요청시 접근할 axios instance
    const request = useAxios();
    const queryClient = useQueryClient();

    const updateNickname = () => request.put(UPDATE_PROFILE, {...data, nickname: value});
    

    // 데이터가 유효하지 않은 경우 다시 가져오도록 트리거
    const mutationNickname = useMutation(updateNickname, {
        onSuccess: () => {
            queryClient.invalidateQueries(['myProfile']);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            console.log(error.response.data.message);
        }
    });

    // 닉네임 중복 체크 요청
    const onClickCheck = () => {
        console.log(`변경하고자 하는 닉네임: ${value}`);
        if(value.length < 1) {
            alert('닉네임은 1글자 이상이여야 합니다.');
        }
        request.put(VALIDATE_MEMBER_INFO, {...data, nickname: value})
            .then((response) => {
                console.log(response);
                setIsCheck(true);
            })
            .catch((error) => {
                console.error(error.response.data.message);
            })
    }

    const onClickChange = () => {
        setIsChange(true);
        if(isCheck) {
            mutationNickname.mutate();
        }
    }


    return (
        <StyledModifyNickname className="modify" is_check={`${isCheck}`}>
            {/* 수정 목록 알려줌 */}
            <h4 className="modify__header">
                <div className="modify__header__container">
                    <strong className="bold">{data.nickname}님</strong> 변경하고자 하는
                    <em className="accent">닉네임</em>을 입력해주세요.
                </div>
            </h4>

            <div className="current">
                <FontAwesomeIcon icon={faStar} /> 
                <strong>{data.nickname}</strong>
            </div>

            {/* 변경할 닉네임 입력창(input) */}
            <div className="modify__input">
                <div className="input-container">
                    <input type="text" 
                        id="nickname" 
                        placeholder="변경할 닉네임 입력" 
                        className="modify-input" 
                        onChange={(e) => {
                            setValue(e.target.value);
                            setIsCheck(false);
                        }}
                    />
                    <button
                        className="check-btn"
                        onClick={onClickCheck}
                    >확인</button>
                </div>
            </div>
            

            {/* 닉네임 설명 */}
            <div className="description">
                <p>변경된 닉네임은 헬스마켓+ 서비스내 본인이 작성한 게시물/상품 등 정보 대부분에 포함됩니다.</p>
            </div>
            
            { !isCheck && isChange ? 
                <div className="check-nickname">
                    <p>닉네임 중복확인을 진행해주세요.</p>
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
            
        </StyledModifyNickname>
    );
}

export default ModifyNickname;
