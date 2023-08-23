import * as S from "./styled";
import ArrowSVG from "../../../../assets/guide_arrow.svg";

interface SortDropdownProps {
    children: string;
}

function SortDropdown({ children }: SortDropdownProps) {
    return (
        <S.Wrapper>
            <button type="button" className="products__category-dropdown">
                {children}
                <img
                    className="products__category-dropdown__arrow-svg"
                    src={ArrowSVG}
                />
            </button>
        </S.Wrapper>
    );
}

export default SortDropdown;
