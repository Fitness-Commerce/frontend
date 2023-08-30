import * as S from "./styled";

import { Link, Outlet, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";

import profile from "../../assets/profile.jpeg";


const ProfilePage = () => {
    const url = useLocation().pathname.slice(1);
    let isAddNow = false;
    let location = '';
    for(let i=0; i<url.length; i++) {
        if(url[i] === "/") {
            isAddNow = true;
            continue;
        }
        if(isAddNow) {
            location += url[i];
        }
    }

    const nickname="닉네임";
    const email="jsj2505@gmail.com";

    return (
        <S.ProfilePage>
            {/* profile page left side */}
            <S.ProfilePageLeft>
                <span className="profile-page__left__title">
                    <Link to="/">헬스마켓+</Link>    
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

                    <li className="chat">
                        <Link to="/user/chat">
                            <FontAwesomeIcon icon={faCommentDots} />
                            <span>채팅</span>
                        </Link>
                    </li>
                </S.Ul>

                <div className="profile-page__left__logout">
                    <span>로그아웃</span>
                </div>
            </S.ProfilePageLeft>

            <Outlet />

        </S.ProfilePage>
    );
}

export default ProfilePage;