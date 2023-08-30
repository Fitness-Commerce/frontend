import { useEffect, useState } from "react";

import { useSetRecoilState } from "recoil";
import { rangeListAtom } from "../../recoil/signup/atom.ts";



// constance
import { KOREALOCATION } from "../../contance/koreaData.ts";

interface ISelectRange {
    index: number,
    setSelectRangeComponentsFn: React.Dispatch<React.SetStateAction<JSX.Element[]>>
}

const SelectRange = ({index, setSelectRangeComponentsFn}: ISelectRange) => {
    console.log(`ADD index: ${index}`);
    // Location
    const [sidoState, setSidoState] = useState("");
    const [sigugunState, setSigugunState] = useState("");

    const { sido, sigugun, dong } = KOREALOCATION;

    // Recoil
    const setAreaRangeList = useSetRecoilState(rangeListAtom);
    

    const onClickRemove = () => {
        setSelectRangeComponentsFn((prev) => {
            const temp = [...prev];
            temp.splice(index, 1);
            return temp;
        })
    }

    useEffect(() => {
        return () => {
            setAreaRangeList((prev) => {
                const prevList = [...prev];
                prevList.splice(index, 1);
                return prevList;
            })
        }
    }, []);

    return (
        <div className="form__address">
            {/* 시/도 선택 */}
            <select name="sido" required onChange={(e) => setSidoState(e.target.value)}>
                <option value="">선택</option>
                {sido.map((el) => (
                    <option key={el.sido} value={el.sido}>
                        { el.codeNm }
                    </option>
                ))}
            </select>
            
            {/* 시/군/구 선택 */}
            <select required onChange={(e) => setSigugunState(e.target.value)}>
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
            <select required onChange={(e) => {
                const temp = e.target.value;
                let address = '';
                address += sido.filter(e => e.sido === sidoState)[0].codeNm + ' ';
                address += sigugun.filter(e => e.sido === sidoState && e.sigugun === sigugunState)[0].codeNm + ' ';
                address += dong.filter(e => e.sido === sidoState && e.sigugun === sigugunState && e.dong === temp)[0].codeNm;
                setAreaRangeList((prev) => [...prev, address]);
            }}>
                <option value="">선택</option>
                {dong
                    .filter((el) => el.sido === sidoState && el.sigugun === sigugunState)
                    .map((el) => (
                        <option key={el.dong} value={el.dong}>
                            {el.codeNm}
                        </option>
                    ))}
            </select>
            <button id="remove-range" onClick={onClickRemove}>🅧</button>
        </div>
    );
}

export default SelectRange;