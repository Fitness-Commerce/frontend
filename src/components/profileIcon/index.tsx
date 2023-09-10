import * as S from "./styled";

import profile from "../../assets/profile.jpeg";

import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";



const ProfileIcon = () => {
    const logout = useLogout();
    
    return (
        <S.Profile>
            <div className="profile-wrapper">
                <div className="user-profile-wrapper">
                    <Link to="/user/profile">
                        <img
                            className="user-profile" 
                            src={profile} 
                            alt="user_profile" 
                        />
                    </Link>
                </div>
                
                <div className="dropdown">
                    <ul className="ul-profile">
                        <Link to="/user/profile"><li className="ul-profile__li-profile"><span>Profile</span></li></Link>
                    </ul>
                    <ul className="ul-center">
                        <Link to="/user/dashboard"><li className="ul-center__li-dashboard"><span>Dashboard</span></li></Link>
                        <Link to="/user/chat"><li className="ul-center__li-chat"><span>Chat</span></li></Link>
                    </ul>
                    <ul className="ul-logout">
                        <li className="ul-logout__li-logout"><span onClick={logout}>Log out</span></li>
                    </ul>
                </div>
            </div>
            <Link to="/user/dashboard"><button className="dashboard">Dashboard</button></Link>
        </S.Profile>
    );
}

export default ProfileIcon;