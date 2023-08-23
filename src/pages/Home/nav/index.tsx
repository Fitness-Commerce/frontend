import SideMarginWrapper from "../../../style/SideMarginWrapper";
import * as S from "./styled";

const Nav = () => {
    return (
        <SideMarginWrapper>
            <S.Nav>
                <div className="nav-wrapper">
                    <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R6i9l6:" data-state="closed" className="nav-wrapper__category-btn">
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.167 5.417h11.666M4.167 10h11.666M4.167 14.584h11.666" stroke="#000" strokeLinecap="round"></path></svg>
                        <span className="nav-wrapper__category-btn__text">카테고리</span>
                    </button>
                    
                    <button type="button" aria-pressed="true" data-state="on" data-pressed="false" className="css-15snm10">전체 매물</button>
                    
                    <button type="button" aria-pressed="false" data-state="off" data-pressed="false" className="css-15snm10">매물 지도</button>
                </div>
            </S.Nav>
        </SideMarginWrapper>
    );
}

export default Nav;