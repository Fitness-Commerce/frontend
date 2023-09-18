import * as S from "./styled";
import logo from "../../assets/logo.png";

import { useState } from "react";

// Recoil
import { useRecoilValue } from "recoil";
import { isLogin } from "../../recoil/login/atom";

// components
import LoginModal from "../login/LoginModal";
import ProfileIcon from "../profileIcon";
import { Link } from "react-router-dom";


const Header = () => {
    // 로그인 로그아웃 위한 상태 값
    const isLoggedIn = useRecoilValue(isLogin);

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const onClickLogin = () => {
        setIsLoginModalOpen(true);
    }

    return (
        <S.Header>
            <Link to="/">
                <div className="header__logo">
                    <img src={logo} alt="header log" className="header__logo-img logo" />
                    <h1 className="header__logo-name">헬스마켓+</h1>
                </div>
            </Link>

            <div className="header__search">
                <form className="header__search__form">
                    <input type="text" placeholder="찾고 싶은 헬스용품을 검색해 보세요" className="header__search__form__input" />
                </form>
            </div>

            {isLoggedIn ?
            <ProfileIcon /> : 
            <button className="header__login" onClick={ onClickLogin }>Log in</button>}
            
            {/* Login Modal */}
            { isLoginModalOpen && <LoginModal setIsLoginModalOpen={ setIsLoginModalOpen } /> }
        </S.Header>
    );
}

export default Header;