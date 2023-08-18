import * as S from "./styled";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <S.Header>
            <div className="header__logo">
                <img src={logo} alt="header log" className="header__logo-img" />
                <h1 className="header__logo-name">헬스마켓+</h1>
            </div>
            <div className="header__search">
                <form className="header__search__form">
                    <input type="text" placeholder="찾고 싶은 헬스용품을 검색해 보세요" className="header__search__form__input" />
                    <button className="header__search__form__button-remove">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="#ECEDEF"></circle><path d="m8 8 8 8M8 16l8-8" stroke="#fff"></path></svg>
                    </button>
                    <button className="header__search__form__button-search">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m19.75 19.75-5-5" stroke="#272727" strokeWidth="2" strokeLinecap="round"></path><circle cx="10.75" cy="10.75" r="6.5" fill="#F4F4F4" stroke="#272727" strokeWidth="2"></circle></svg>
                    </button>
                </form>
            </div>

            <button className="header__login">로그인/회원가입</button>
        </S.Header>
    );
}

export default Header;