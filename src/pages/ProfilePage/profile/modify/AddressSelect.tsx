import { styled } from "styled-components";

import { useState } from "react";

import { KOREALOCATION } from "../../../../contance/koreaData";


const StyledAddressSelect = styled.div`
    display: flex;
    flex-direction: column;
    .select-container {
        padding: 1rem 0;
        padding-bottom: 0;
    }
    .input-container-about-address {
        padding: 0;
    }
    .info-span {
        font-size: small;
        font-weight: 500;
    }
    .selects {
        display: flex;
        justify-content: flex-start;
        padding: 10px 0;
    }
    .address__select, .address__detail {
        width: max-content;
        border: none;
        outline: none;
        padding: 5px;
        border-radius: 4px;
    }
    .address__select {
        margin-right: 5px;
    }
    .address__detail {
        margin: 10px 0;
        width: 100%;
    }
`;

const AddressSelect = ({frontSetter, detailSetter}: ISelectProps) => {
    // Location
    const [sidoState, setSidoState] = useState("");
    const [sigugunState, setSigugunState] = useState("");

    const { sido, sigugun, dong } = KOREALOCATION;

    return (
        <StyledAddressSelect>
            <div className="select-container">
                <span className="info-span">주소를 선택해주세요.</span>
                <div className="selects">
                    <select name="sido" 
                        required 
                        className="address__select"
                        onChange={(e) => setSidoState(e.target.value)}
                    >
                        <option value="">선택</option>
                        {sido.map((el) => (
                            <option key={el.sido} value={el.sido}>
                                { el.codeNm }
                            </option>
                        ))}
                    </select>
                    
                    {/* 시/군/구 선택 */}
                    <select required 
                        className="address__select"
                        onChange={(e) => setSigugunState(e.target.value)}
                    >
                        <option value="">선택</option>
                        {sigugun
                            .filter((el) => el.sido === sidoState)
                            .map((el) => (
                                <option key={el.sigugun} value={el.sigugun}>
                                    {el.codeNm}
                                </option>
                            ))}
                    </select>

                    {/* 동 선택 */}
                    <select required 
                        className="address__select"
                        onChange={(e) => {
                        const temp = e.target.value;
                        let address = '';
                        address += sido.filter(e => e.sido === sidoState)[0].codeNm + ' ';
                        address += sigugun.filter(e => e.sido === sidoState && e.sigugun === sigugunState)[0].codeNm + ' ';
                        address += dong.filter(e => e.sido === sidoState && e.sigugun === sigugunState && e.dong === temp)[0].codeNm;
                        frontSetter(address);
                        }}
                    >
                        <option value="">선택</option>
                        {dong
                            .filter((el) => el.sido === sidoState && el.sigugun === sigugunState)
                            .map((el) => (
                                <option key={el.dong} value={el.dong}>
                                    {el.codeNm}
                                </option>
                            ))}
                    </select>
                </div>
            </div>
            <div className="input-container-about-address">
                <span className="info-span">상세 주소를 입력해주세요.</span>
                <input className="address__detail"
                    required
                    type="text"
                    placeholder="상세주소를 입력해주세요."
                    onChange={((e) => {
                        detailSetter(e.target.value);
                    })}
                />
            </div>
        </StyledAddressSelect>
    );
}

export default AddressSelect;

export interface ISelectProps {
    frontSetter: React.Dispatch<React.SetStateAction<string>>;
    detailSetter: React.Dispatch<React.SetStateAction<string>>;
}