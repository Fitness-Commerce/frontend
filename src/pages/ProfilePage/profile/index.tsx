import * as S from "./styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faStar, faHandshake } from "@fortawesome/free-regular-svg-icons";


import profile from "../../../assets/profile.jpeg";


const Profile = () => {
    const name = "조성준";
    const nickname = "잠옷맨";
    const email = "jsj2505@naver.com";
    const phoneNumber = "010-9999-9999";
    const address = "빅토리아 아일랜드 헤네시스";
    const addressDetail = "택시승강장 채널 1";
    const currentAreaRange = ["자유시장", "궁수 교육원", "마야의 집"];
    return (
        <S.Profile>
            <S.UserData className="box-shadow-default">
                <span className="info-text">기본정보</span>

                {/* 사진, 이름, 메일주소 */}
                <div className="user-data__name">
                    <div className="user-data__name__front">
                        <img src={profile} alt="profile" />
                        <div className="user-data__name__front__data">
                            <strong className="name">{name}</strong>
                            <span className="email">{email}</span>
                        </div>
                    </div>
                    <div className="user-data__modify">
                        <button className="modify-btn">실명수정</button>
                    </div>
                </div>

                {/* 닉네임 */}
                <div className="user-data__oneline user-data__nickname">
                    <span>
                        <FontAwesomeIcon icon={faStar} className="nickname" />
                        <span>{nickname}</span>
                    </span>
                    <div className="user-data__modify">
                        <button className="modify-btn">수정</button>
                    </div>
                </div>

                {/* 전화번호 */}
                <div className="user-data__oneline user-data__phone">
                    <span>
                        <FontAwesomeIcon icon={faMobileScreenButton} className="phone" />
                        <span>{phoneNumber}</span>
                    </span>
                    <div className="user-data__modify">
                        <button className="modify-btn">수정</button>
                    </div>
                </div>

                {/* 메일주소 */}
                <div className="user-data__oneline user-data__email">
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} className="email" />
                        <span>{email}</span>
                    </span>
                    <div className="user-data__modify">
                        <button className="modify-btn">수정</button>
                    </div>
                </div>
            </S.UserData>

            <S.Residence>
                <strong>지역 정보 관리</strong>
                <div className="residence box-shadow-default">
                    {/* 개인 주소 */}
                    <div className="residence__address">
                        <span className="info-text">주소</span>
                        <div className="residence__address__data">
                            <div>
                                <FontAwesomeIcon icon={faLocationDot} className="location" />
                                <div className="address-space">
                                    <span className="address-main">{address}</span>
                                    <span className="address-detail">{addressDetail}</span>
                                </div>
                            </div>
                            <button className="modify-btn">주소변경</button>
                        </div>
                    </div>

                    {/* 거래가능 범위 */}
                    <div className="range">
                        <div className="range__header">
                            <span className="info-text">거래범위</span>
                            <button className="modify-btn">추가 및 삭제</button>
                        </div>
                        
                        <div className="range__current">
                            <FontAwesomeIcon icon={faHandshake} />
                            <div className="range__current__area-range">
                            {
                                currentAreaRange.map((location) => (
                                    <span className="location-item">{location}</span>
                                ))
                            }
                            {
                                currentAreaRange.map((location) => (
                                    <span className="location-item">{location}</span>
                                ))
                            }
                            {
                                currentAreaRange.map((location) => (
                                    <span className="location-item">{location}</span>
                                ))
                            }
                            </div>
                        </div>
                        
                    </div>
                </div>
            </S.Residence>
        </S.Profile>
    );
}

export default Profile;