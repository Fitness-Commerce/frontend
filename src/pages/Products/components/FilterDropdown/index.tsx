import { useRef, useEffect,  useState } from "react";

import { useRecoilState } from "recoil";
import { sortOptionState } from "../../../../recoil/products/atom";

import * as S from "./styled";
import ArrowSVG from "../../../../assets/guide_arrow.svg";

import { filterLabel } from "../../../../contance/products";

function SortDropdown() {
    const [filter, setFilter] = useRecoilState(sortOptionState);
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLButtonElement | null>(null);

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
        };
    }, []);

    // 전역상태값들 초기화
    useEffect(() => {
        return () => {
            setFilter(filterLabel[0]);
        };
    }, []);

    return (
        <S.Wrapper>
            <button
                ref={modalRef}
                type="button"
                className="products__category-dropdown"
                onClick={() => setIsOpen(!isOpen)}
            >
                {filter}
                <img
                    className="products__category-dropdown__arrow-svg"
                    src={ArrowSVG}
                />
            </button>
            {isOpen && (
                <S.SortModal>
                    {filterLabel.map((label) => (
                        <button
                            key={label}
                            type="button"
                            className="view-mode-btn"
                            onClick={() => setFilter(label)}
                            disabled={filter === label}
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