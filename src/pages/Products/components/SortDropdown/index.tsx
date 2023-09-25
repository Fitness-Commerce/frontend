import { useRef, useEffect, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { viewModeState } from "../../../../recoil/products/atom";
import { isLogin } from "../../../../recoil/login/atom";

import * as S from "./styled";
import ArrowSVG from "../../../../assets/guide_arrow.svg";

import { sortLabel } from "../../../../contance/products";

function SortDropdown() {
    const [viewMode, setViewMode] = useRecoilState(viewModeState);
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLButtonElement | null>(null);
    const login = useRecoilValue(isLogin);

    useEffect(() => {
        const modalHandler = (event: MouseEvent) => {
            if (
                modalRef.current &&
                event.target instanceof Node &&
                !modalRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", modalHandler);

        return () => {
            document.removeEventListener("click", modalHandler);

            // 전역상태값 초기화
            setViewMode(sortLabel[0]);
        };
    }, []);

    return (
        <S.Wrapper>
            <button
                ref={modalRef}
                type="button"
                className="products__category-dropdown"
                onClick={() => setIsOpen(!isOpen)}
                disabled={!login}
            >
                {viewMode}
                <img
                    className="products__category-dropdown__arrow-svg"
                    src={ArrowSVG}
                />
            </button>
            {isOpen && (
                <S.SortModal>
                    {sortLabel.map((label) => (
                        <button
                            key={label}
                            type="button"
                            className="view-mode-btn"
                            onClick={() => setViewMode(label)}
                            disabled={viewMode === label}
                        >
                            {label}
                        </button>
                    ))}
                </S.SortModal>
            )}
        </S.Wrapper>
    );
}

export default SortDropdown;
