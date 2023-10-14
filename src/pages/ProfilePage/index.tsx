import * as S from "./styled";

import { Link, Outlet, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";

import profile from "../../assets/profile.jpeg";
import logo from "../../assets/logo.png";
import { useLogout } from "../../hooks/useLogout";
import { useAxios } from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { GET_SELF_MEMBER } from "../../contance/endPoint";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorPage from "../Error";
import Header from "../../components/header";



const ProfilePage = () => {
    const logout = useLogout();
    const request = useAxios();

    const url = useLocation().pathname.slice(1);
    let isAddNow = false;
    let location = '';
    for (let i = 0; i < url.length; i++) {
        if (url[i] === "/") {
            isAddNow = true;
            continue;
        }
        if (isAddNow) {
            location += url[i];
        }
    }

    // 처음 렌더시 유저 프로필 정보 가져오기
    const { isLoading, error, data } = useQuery({
        queryKey: ['myProfile'],
        queryFn: () => request(GET_SELF_MEMBER)
    })

    if (isLoading) return <LoadingSpinner />
    if (error) return <ErrorPage />

    const nickname = data?.data.nickname;
    const email = data?.data.email;

    return (
        <S.ProfilePage>
            {/* profile page left side */}
            <S.ProfilePageLeft className="profile-left">
                <span className="profile-page__left__title">
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo" />
                        <span>헬스마켓+</span>
                    </Link>
                </span>

                <S.UserProfile>
                    <img src={profile} alt="profile-img" />
                    <span className="nickname">{nickname}</span>
                    <span className="email">{email}</span>
                </S.UserProfile>

                <S.Ul location={location}>
                    <li className="profile">
                        <Link to="/user/profile">
                            <FontAwesomeIcon icon={faAddressCard} />
                            <span>내 프로필</span>
                        </Link>
                    </li>

                    <li className="dashboard">
                        <Link to="/user/dashboard">
                            <FontAwesomeIcon icon={faTableColumns} />
                            <span>대시보드</span>
                        </Link>
                    </li>
                </S.Ul>

                <div className="profile-page__left__logout">
                    <Link to="/"><span onClick={logout}>로그아웃</span></Link>
                </div>
            </S.ProfilePageLeft>

            <Header padding="0" />

            <Outlet />

        </S.ProfilePage>
    );
}

export default ProfilePage;