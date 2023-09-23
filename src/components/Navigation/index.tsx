import Categories from "../../pages/Products/components/Categories";
import SideMarginWrapper from "../../style/SideMarginWrapper";
import * as S from "./styled";

function Navigation() {
    return (
        <SideMarginWrapper>
            <S.Nav>
                <div className="nav-wrapper">
                    <button
                        type="button"
                        className="nav-wrapper__category-btn"
                    >
                        <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.167 5.417h11.666M4.167 10h11.666M4.167 14.584h11.666"
                                stroke="#000"
                                strokeLinecap="round"
                            ></path>
                        </svg>
                        <span className="nav-wrapper__category-btn__text">
                            카테고리
                        </span>
                    </button>

                    {/* 호버시 카테고리 목록 grid로 보여줌 */}
                    <Categories />

                    <S.Link
                        to={"/products"}
                    >
                        전체 매물
                    </S.Link>

                    <S.Link
                        to={"/community"}
                    >
                        커뮤니티
                    </S.Link>
                </div>
            </S.Nav>
        </SideMarginWrapper>
    );
}

export default Navigation;
