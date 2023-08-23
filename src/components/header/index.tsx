import * as S from "./styled";

import { useState } from "react";

import LoginModal from "../login/LoginModal";
// import logo from "../../assets/logo.png";


const Header = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const onClickLogin = () => {
        setIsLoginModalOpen(true);
    }

    return (
        <S.Header>
            <div className="header__logo">
                {/* <img src={logo} alt="header log" className="header__logo-img" /> */}
                <h1 className="header__logo-name">헬스마켓+</h1>
            </div>
            <div className="header__search">
                <form className="header__search__form">
                    <input type="text" placeholder="찾고 싶은 헬스용품을 검색해 보세요" className="header__search__form__input" />
                </form>
            </div>
            
            <button className="header__login" onClick={ onClickLogin }>Log in</button>

            {/* Login Modal */}
            { isLoginModalOpen && <LoginModal setIsLoginModalOpen={ setIsLoginModalOpen } /> }
        </S.Header>
    );
}

export default Header;