import * as S from "./styled";
import profile from "../../../assets/profile.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton, faLocationDot, faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faStar, faHandshake } from "@fortawesome/free-regular-svg-icons";


import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../../../hooks/useAxios";
import { GET_SELF_MEMBER } from "../../../contance/endPoint";

import useModal from "../../../hooks/useModal";
import Modal from "../../../components/Modal";

import ModifyNickname from "./modify/ModifyNickname";
import ModifyPhoneNumber from "./modify/ModifyPhoneNumber";
import ModifyPassword from "./modify/ModifyPassword";
import ModifyAddress from "./modify/ModifyAddress";
import ModifyRange from "./modify/ModifyRange";



const Profile = () => {
    const request = useAxios();
    const { isOpen, openModal, closeModal } = useModal();

    // 각 수정 모달의 렌더링 여부
    const [isModifyNick, setIsModifyNick] = useState(false); // 닉네임 수정
    const [isModifyPhoneNumber, setIsModifyPhoneNumber] = useState(false); // 전화번호 수정
    const [isModifyPassword, setIsModifyPassword] = useState(false); // 비밀번호 수정
    const [isModifyAddress, setIsModifyAddress] = useState(false) // 주소 수정
    const [isModifyRange, setIsModifyRange] = useState(false); // 거래가능 지역 수정


    // 처음 렌더시 유저 프로필 정보 가져오기
    const { isLoading, error, data } = useQuery({
        queryKey: ['myProfile'],
        queryFn: () => request(GET_SELF_MEMBER)
    })

    const rangeArr: string[] = [];
    data?.data.area_range.forEach((e: string) => {
        const parts: string[] = e.split(" ");
        const lastIndex = parts.length - 1;
        if (lastIndex >= 0) {
            rangeArr.push(parts[lastIndex]);
        }
    });
    

    if (isLoading) return <>Loading...</>;
    if (error) return <>An error has occurred</>;


    return (
        <S.Profile>
            <S.UserData className="box-shadow-default">
                <span className="info-text">기본정보</span>

                {/* 사진, 이름, 메일주소 */}
                <div className="user-data__name">
                    <div className="user-data__name__front">
                        <img src={profile} alt="profile" />
                        <div className="user-data__name__front__data">
                            <strong className="name">{data?.data.username}</strong>
                            <span className="email">{data?.data.email}</span>
                        </div>
                    </div>
                </div>

                {/* 메일주소 */}
                <div className="user-data__oneline user-data__email">
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} className="email" />
                        <span>{data?.data.email}</span>
                    </span>
                </div>


                {/* 닉네임 */}
                <div className="user-data__oneline user-data__nickname">
                    <span>
                        <FontAwesomeIcon icon={faStar} className="nickname" />
                        <span>{data?.data.nickname}</span>
                    </span>
                    <div className="user-data__modify">
                        <button className="modify-btn" onClick={() => {
                            openModal()
                            setIsModifyNick(true);
                        }}>수정</button>
                        {isOpen && isModifyNick &&
                            <Modal onClose={closeModal} setter={setIsModifyNick}>
                                <ModifyNickname data={data?.data} onClose={closeModal} />
                            </Modal>
                        }
                    </div>
                </div>

                {/* 전화번호 */}
                <div className="user-data__oneline user-data__phone">
                    <span>
                        <FontAwesomeIcon icon={faMobileScreenButton} className="phone" />
                        <span>{data?.data.phoneNumber}</span>
                    </span>
                    <div className="user-data__modify">
                        <button className="modify-btn" onClick={() => {
                            openModal();
                            setIsModifyPhoneNumber(true);
                        }}>수정</button>
                        {isOpen && isModifyPhoneNumber ?
                            <Modal onClose={closeModal} setter={setIsModifyPhoneNumber}>
                                <ModifyPhoneNumber data={data?.data} onClose={closeModal} />
                            </Modal>
                            : null
                        }
                    </div>
                </div>

                {/* 비밀번호 */}
                <div className="user-data__oneline user-data__password">
                    <span>
                        <FontAwesomeIcon icon={faLock} />
                        <span>비밀번호</span>
                    </span>
                    <div className="user-data__modify">
                        <button className="modify-btn" onClick={() => {
                            openModal();
                            setIsModifyPassword(true);
                        }}>수정</button>
                        {isOpen && isModifyPassword ?
                            <Modal onClose={closeModal} setter={setIsModifyPassword}>
                                <ModifyPassword data={data?.data} onClose={closeModal} />
                            </Modal>
                            : null
                        }
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
                            <div className="residence__address__data__show-location">
                                <FontAwesomeIcon icon={faLocationDot} className="location" />
                                <div className="address-space">
                                    <span className="address-main">{data?.data.address.front_address}</span>
                                    <span className="address-detail">{data?.data.address.detailed_address}</span>
                                </div>
                            </div>
                            <button className="modify-btn modify-btn-address" onClick={() => {
                                openModal();
                                setIsModifyAddress(true);
                            }}>주소변경</button>
                            {isOpen && isModifyAddress ?
                                <Modal onClose={closeModal} setter={setIsModifyAddress}>
                                    <ModifyAddress data={data?.data} onClose={closeModal} />
                                </Modal>
                                : null
                            }
                        </div>
                    </div>

                    {/* 거래가능 범위 */}
                    <div className="range">
                        <div className="range__header">
                            <span className="info-text">거래범위</span>
                            <button className="modify-btn" onClick={() => {
                                openModal();
                                setIsModifyRange(true);
                            }}>추가 및 삭제</button>
                            {isOpen && isModifyRange ?
                                <Modal onClose={closeModal} setter={setIsModifyRange}>
                                    <ModifyRange data={data?.data} range={data?.data.area_range} onClose={closeModal} />
                                </Modal>
                                : null
                            }
                        </div>

                        <div className="range__current">
                            <FontAwesomeIcon icon={faHandshake} />
                            <div className="range__current__area-range">
                                {/* TODO 거래범위 표시 */}
                                {rangeArr?.map((e: string, index: number) => (
                                    <span className="location-item" key={index}>{e}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </S.Residence>
        </S.Profile>
    );
}

export default Profile;