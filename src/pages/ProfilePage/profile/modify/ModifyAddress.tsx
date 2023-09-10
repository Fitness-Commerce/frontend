import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import { IProfileData } from "../../../../interface/Profile";
import { useAxios } from "../../../../hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UPDATE_PROFILE } from "../../../../contance/endPoint";
import AddressSelect from "./AddressSelect";


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
    .select-address {
        padding: 0 1rem;
    }
`;

const ModifyAddress = ({ data, onClose }: IProfileData) => {
    const [frontAddress, setFrontAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");

    console.log(`frontAddress: ${frontAddress}`);
    console.log(`detail: ${detailAddress}`);


    // 권한이 필요한 서버요청시 접근할 axios instance
    const request = useAxios();
    const queryClient = useQueryClient();

    const updateAddress = () => request.put(UPDATE_PROFILE, {...data, address: {
        front_address: frontAddress,
        detailed_address: detailAddress
    }});

    // 데이터가 유효하지 않은 경우 다시 가져오도록 트리거
    const mutationNickname = useMutation(updateAddress, {
        onSuccess: () => {
            queryClient.invalidateQueries(['myProfile']);
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const onClickChange = () => {
        if(frontAddress === "") return alert('주소를 선택해주세요.');
        if(detailAddress === "") return alert('상세주소를 입력해주세요');
        
        mutationNickname.mutate();
    }

    return (
        
        <StyledModifyAddress className="modify address-modify">
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
            <div className="select-address">
                <AddressSelect frontSetter={setFrontAddress} detailSetter={setDetailAddress} />
            </div>

            {/* 주소 설명 */}
            <div className="description">
                <p>변경한 주소는 헬스마켓+ 서비스 내 중고 물품 표시범위의 기준이 됩니다.</p>
            </div>

            {/* 취소 및 변경 */}
            <div className="modify-address__footer">
                <span className="modify__footer__cancel" onClick={() => {
                    onClose();
                }}>취소</span>
                <span 
                    className="modify-address__footer__submit"
                    onClick={onClickChange}
                >변경</span>
            </div>
        </StyledModifyAddress>
    );
}

export default ModifyAddress;