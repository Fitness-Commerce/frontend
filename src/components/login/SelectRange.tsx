import { useState } from "react";

// constance
import { KOREALOCATION } from "../../contance/koreaData.ts";

const SelectRange = () => {
    // Location
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    const [val3, setVal3] = useState("");

    const { sido, sigugun, dong } = KOREALOCATION;

    

    const onChangeLastSelect = () => {
        let address = '';
        address += sido.filter(e => e.sido === val1)[0].codeNm + ' ';
        address += sigugun.filter(e => e.sido === val1 && e.sigugun === val2)[0].codeNm + ' ';
        address += dong.filter(e => e.sido === val1 && e.sigugun === val2 && e.dong === val3)[0].codeNm;
        console.log(address);
    }

    return (
        <div className="form__address">
            {/* 시/도 선택 */}
            <select name="sido" required onChange={(e) => setVal1(e.target.value)}>
                <option value="">선택</option>
                {sido.map((el) => (
                    <option key={el.sido} value={el.sido}>
                        { el.codeNm }
                    </option>
                ))}
            </select>
            
            {/* 시/군/구 선택 */}
            <select required onChange={(e) => setVal2(e.target.value)}>
                <option value="">선택</option>
                {sigugun
                    .filter((el) => el.sido === val1)
                    .map((el) => (
                        <option key={el.sigugun} value={el.sigugun}>
                            {el.codeNm}
                        </option>
                    ))}
            </select>

            {/* 동 선택 */}
            <select required onChange={(e) => {
                setVal3(e.target.value);
                onChangeLastSelect();
            }}>
                <option value="">선택</option>
                {dong
                    .filter((el) => el.sido === val1 && el.sigugun === val2)
                    .map((el) => (
                        <option key={el.dong} value={el.dong}>
                            {el.codeNm}
                        </option>
                    ))}
            </select>
        </div>
    );
}

export default SelectRange;