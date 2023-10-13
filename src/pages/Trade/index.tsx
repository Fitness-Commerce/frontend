// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { isLogin } from "../../recoil/login/atom";

import Modal from "../../components/Modal";
import ChatContainer from "../../components/Chat/components/ChatContainer";
import useModal from "../../hooks/useModal";
import useAuth from "../../hooks/useAuth";

import * as S from "./styled";
import SideMarginWrapper from "../../style/SideMarginWrapper";
import LoadingSpinner from "../../components/LoadingSpinner";

import ImageSlide from "./components/ImageSlide";
import visibillityIcon from "../../assets/visibility.svg";
import locationIcon from "../../assets/location.svg";
import reportIcon from "../../assets/report.svg";

// 비동기 요청
import getProduct from "../../api/products_api/getProduct";
import getMemberProfile from "../../api/test_api/getMemberProfile";
import getMyProfile from "../../api/test_api/getMyProfile";

// 날짜 계산기
import pastTimeCalculator from "../../util/pastTimeCalculator";

// 매물 상세 페이지(거래 페이지)
const Trade = () => {
    const { itemId: productId } = useParams();
    const { isOpen, openModal, closeModal } = useModal();
    const login = useRecoilValue(isLogin);
    const excuteGetMyProfile = useAuth(getMyProfile);

    // 매물 요청
    const {
        data: product,
        error: productError,
        isLoading: isProductLoading,
        isError: isProductError,
    } = useQuery(
        ["productInfo", productId],
        () => getProduct(productId as string),
        {
            select: (data) => ({
                ...data,
                createdAt: pastTimeCalculator(data.createdAt),
            }),
        }
    );

    // 매물 요청 완료되면 거래가능 지역 가져오기위해 멤버 정보 요청
    const {
        data: member,
        error: memberError,
        isLoading: isMemberLoading,
        isError: isMemberError,
    } = useQuery(
        ["tradeProfile", product ? product.id : null],
        () => getMemberProfile(product?.memberId as number),
        {
            enabled: !!product, // product가 선행되어야 함
        }
    );

    const {
        data: userId,
        isLoading: isUserIdLoading,
        isError: isUserIdError,
        error: userIdError,
    } = useQuery(["myProfile"], excuteGetMyProfile, {
        enabled: login,
        select: (data) => data.id,
    });

    if (isProductLoading || isMemberLoading || isUserIdLoading) {
        return <LoadingSpinner />;
    }

    if (isProductError || isMemberError || isUserIdError) {
        throw productError || memberError || userIdError;
    }

    return (
        <SideMarginWrapper>
            <S.Wrapper>
                <ImageSlide
                    itemImagesUrl={product.itemImagesUrl}
                />
                <div className="trade__info-wrapper">
                    {/* 매물 제목 */}
                    <h1 className="trade__title">{product.itemName}</h1>
                    {/* 매물 가격 */}
                    <span className="trade__price">
                        {product.itemPrice.toLocaleString()}
                        <span className="trade__price__won">원</span>
                    </span>
                    {/* 매물 디테일 */}
                    <div className="trade__details">
                        <div className="trade__details__view-count">
                            <img
                                className="trade__icon"
                                src={visibillityIcon}
                                aria-label="visibillity icon"
                                alt="visibillity icon"
                            />
                            <span>{product.viewCount}</span>
                        </div>
                        <span className="trade__details__created-at">
                            {product.updatedAt || product.createdAt}
                        </span>
                        <button
                            type="button"
                            className="trade__details__report-btn"
                        >
                            <img
                                className="trade__icon"
                                src={reportIcon}
                                aria-label="report icon"
                                alt="report icon"
                            />
                            <span>신고하기</span>
                        </button>
                    </div>
                    {/* 매물 컨텐츠 */}
                    <pre className="trade__content">{product.itemDetail}</pre>
                    {/* 매물 거래 지역 */}
                    <div className="trade__area-range">
                        <img
                            className="trade__icon"
                            src={locationIcon}
                            aria-label="location icon"
                            alt="location icon"
                        />
                        <ul>
                            {member.area_range.map(
                                (area: string, index: number) => (
                                    <li key={index}>{area}</li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="trade__btn-container">
                        <button
                            type="button"
                            className="trade__consider-btn"
                            disabled={userId === member.id}
                        >
                            찜하기
                        </button>
                        <button
                            type="button"
                            className="trade__chat-btn"
                            onClick={() => openModal()}
                            disabled={!login || userId == member.id}
                        >
                            헬스톡
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <Modal onClose={() => closeModal()}>
                        <ChatContainer itemId={parseInt(productId as string)} />
                    </Modal>
                )}
            </S.Wrapper>
        </SideMarginWrapper>
    );
};

export default Trade;
