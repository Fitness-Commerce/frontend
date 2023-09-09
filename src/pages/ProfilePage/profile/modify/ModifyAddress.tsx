import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { IProfileData } from "../../../../interface/Profile";
import SelectRange from "../../../../components/login/SelectRange";



const StyledModifyAddress = styled.div`
    display: flex;
    flex-direction: column;
    h4 {
        padding: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid gray;
    }
    .current {
        display: flex;
        .current__address {
            display: flex;
            flex-direction: column;
            .current__address__front {
                font-weight: 500;
            }
            .current__address__detail {
                font-weight: 400;
            }
        }
    }
`;

const ModifyAddress = ({ data, onClose }: IProfileData) => {
    
    return (
        
        <StyledModifyAddress className="modify">
            {/* 수정 목록 안내 */}
            <h4>
                <span className="bold">{data.nickname}님 </span>변경하고자 하는
                <em className="accent"> 주소</em>를 선택해주세요.
            </h4>

            {/* 현재 주소 */}
            <div className="current">
                <FontAwesomeIcon icon={faLocationDot} /> 
                <div className="current__address">
                    <span className="current__address__front">{data.address.front_address}</span>
                    <span className="current__address__detail">{data.address.detailed_address}</span>
                </div>
                
            </div>

            {/* 변경할 주소 선택창(select) */}
            

            {/* 취소 및 변경 */}
            <div className="modify-address__footer">
                <span className="modify__footer__cancel" onClick={() => {
                    onClose();
                }}>취소</span>
                <span 
                    className="modify-address__footer__submit"
                    // onClick={onClickChange}
                >변경</span>
            </div>
        </StyledModifyAddress>
        

    );
}

export default ModifyAddress;