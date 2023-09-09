import { styled } from "styled-components";
import { IProfileData } from "../../../../interface/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StyledModifyPhoneNumber = styled.div`
`;

const ModifyPhoneNumber = ({data, onClose}: IProfileData) => {

    const [number, setNumber] = useState("");

    return(
        <StyledModifyPhoneNumber>
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
                    <input type="tel" 
                        id="nickname" 
                        placeholder="변경할 전화번호 입력" 
                        className="modify-input" 
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
            </div>
        </StyledModifyPhoneNumber>
    );
}

export default ModifyPhoneNumber;