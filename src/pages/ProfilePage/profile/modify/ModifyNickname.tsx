import { styled } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { IProfileData } from "../../../../interface/Profile";
import { useAxios } from "../../../../hooks/useAxios";
import { UPDATE_PROFILE } from "../../../../contance/endPoint";


const StyledModifyNickname = styled.div`
    .check-nickname {
        padding: 1rem;
        font-size: var(--text-size-small);
        font-weight: 500;
        color: red;
    }
`;

const ModifyNickname = ({data, onClose}: IProfileData) => {
    const request = useAxios();

    // 변경하고자 하는 닉네임
    const [value, setValue] = useState("");

    // 닉네임 중복 체크 여부
    const [isCheck, setIsCheck] = useState(false);
    // 변경 버튼 클릭 여부
    const [isClick, setIsClick] = useState(false);

    const onClickCheck = () => {
        // 닉네임 중복 체크 요청
        // FIXME 이후 중복해당 사항 없음으로 성공 시 
        console.log(`변경하고자 하는 닉네임: ${value}`);
        request.put(UPDATE_PROFILE, {...data, nickname: value});
        setIsCheck(true);
    }

    const onCLickChange = () => {
        setIsClick(true);
    }


    return (
        <StyledModifyNickname className="modify">
            {/* 수정 목록 알려줌 */}
            <h4 className="modify__header">
                <div className="modify__header__container">
                    <strong className="bold">{data.nickname}님</strong> 변경하고자 하는
                    <em className="accent">닉네임</em>을 입력해주세요.
                </div>
            </h4>

            {/* 현재 닉네임 */}
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
                        onChange={(e) => setValue(e.target.value)}
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
            
            { !isCheck && isClick ? 
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
                    onClick={onCLickChange}
                >변경</span>
            </div>
            
        </StyledModifyNickname>
    );
}

export default ModifyNickname;
