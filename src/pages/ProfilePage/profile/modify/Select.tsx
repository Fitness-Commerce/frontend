import { useState } from "react";

import { KOREALOCATION } from "../../../../contance/koreaData";
import { styled } from "styled-components";


const StyledSelect = styled.div`
    display: flex;
    select {
        border: none;
        border-radius: 8px;
        outline: none;
        padding: 4px;
        margin-right: 4px;
    }
`;

interface ISelectProp {
    setter: React.Dispatch<React.SetStateAction<string[]>>;
}

const Select = ({setter}: ISelectProp) => {
    // Location
    const [sidoState, setSidoState] = useState("");
    const [sigugunState, setSigugunState] = useState("");

    const { sido, sigugun, dong } = KOREALOCATION;


    return (
        <StyledSelect className="select">
            <select name="sido"
                required
                className="address__select"
                onChange={(e) => setSidoState(e.target.value)}
            >
                <option value="">선택</option>
                {sido.map((el) => (
                    <option key={el.sido} value={el.sido}>
                        {el.codeNm}
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
                    // setter를 통해 부모에게 값 전달
                    console.log(address, "추가됨");
                    setter((prev: string[]) => {
                        return [...prev, address];
                    })
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
        </StyledSelect>
    );
}

export default Select;