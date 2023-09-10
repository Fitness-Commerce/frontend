import { styled } from "styled-components";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

import { useAxios } from "../../../../hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { IProfileData } from "../../../../interface/Profile";
import Select from "./Select";
import { UPDATE_PROFILE } from "../../../../contance/endPoint";


const StyledModifyRange = styled.div`
    #RemoveRange {
        padding-bottom: 0;
        em {
            color: red;
            font-weight: 400;
        }
    }
    .current {
        display: flex;
        .item-container {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            .range-item {
                font-size: 12px;
                font-weight: 400;
                padding: 4px;
                margin-right: 4px;
                margin-bottom: 4px;
                border-radius: 8px;
                background-color: var(--color-accent-dark-green);
                color: var(--color-black-primary);
                &:hover {
                    cursor: pointer;
                    background-color: #ff6161;
                }
            }
        }
        .no-show {
            font-size: 14px;
        }
    }

    /* select 스타일 */
    .add-container {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        p { font-size: small; margin-bottom: 10px; }
        
    }
`;

const ModifyRange = ({data, range=[], onClose}: IProfileData) => {
    // 현재 선택된 거래가능 지역 리스트 상태
    const [selectedRange, setSelectedRange] = useState<string[]>([...range]);
    // 현재 선택된 거래가능 지역 리스트의 상태를 동 까지만 표시되도록 가공한 배열
    const shortRange: string[] = [];
    selectedRange.forEach((e: string) => {
        const parts: string[] = e.split(" ");
        const lastIndex = parts.length - 1;
        if (lastIndex >= 0) {
            shortRange.push(parts[lastIndex]);
        }
    });

    // 권한이 필요한 서버요청시 접근할 axios instance
    const request = useAxios();
    const queryClient = useQueryClient();

    const updataAreaRange = () => request.put(UPDATE_PROFILE, {...data, area_range: selectedRange});

    // 데이터가 유효하지 않은 경우 다시 가져오도록 트리거
    const mutationAreaRange = useMutation(updataAreaRange, {
        onSuccess: () => {
            queryClient.invalidateQueries(['myProfile']);
        },
        onError: (error) => {
            console.error(error);
        }
    })


    // 동 클릭시 삭제
    const onClickRemove = (e: React.MouseEvent<HTMLSpanElement>) => {
        const targetToRemove = (e.currentTarget.outerText);
        const newSelectRange = selectedRange.filter((range) => {
            const parts = range.split(" ");
            const lastIndex = parts.length - 1;
            return lastIndex >= 0 && parts[lastIndex] !== targetToRemove;
        })
        setSelectedRange(newSelectRange);
    }

    // 변경버튼 클릭
    const onClickChange = () => {
        mutationAreaRange.mutate();
    }

    return (
        <StyledModifyRange className="address-modify modify">
            {/* 수정 목록 알려줌 */}
            <h4 className="modify__header">
                <div className="modify__header__container">
                    <span className="bold">{data.nickname}님</span> 변경하고자 하는
                    <em className="accent">거래범위</em>를 선택해주세요.
                </div>
            </h4>
            
            {/* 삭제방법 설명 */}
            <div id="RemoveRange" className="description">
                <p>해당 지역을 <em>클릭</em>해 제거할 수 있습니다.</p>
            </div>

            {/* 현재 등록된 거래범위 */}
            <div className="current">
                <FontAwesomeIcon icon={faHandshake} />
                <div className="item-container">
                    { shortRange && shortRange.length !== 0 ? 
                    (shortRange.map((e, index) => (
                        <span className="range-item" key={index} onClick={onClickRemove}>{e}</span>
                    ))) 
                    : (<p className="no-show">현재 등록된 추가 거래지역이 없습니다.</p>)}
                </div>
            </div>
            
            
            {/* 거래범위 추가 및 삭제하기 */}
            <div className="add-container">
                <p>추가할 지역을 선택해주세요.</p>
                <Select setter={setSelectedRange} />
            </div>

            {/* 거래범위 지역 설명 */}
            <div className="description">
                <p>선택된 지역은 헬스마켓+ 서비스 내 거래가능 상품을 보여주는데 사용됩니다.</p>
            </div>

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
        </StyledModifyRange>
    );
}

export default ModifyRange;