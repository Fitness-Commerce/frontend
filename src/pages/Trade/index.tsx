import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import LoadingSpinner from "../../components/LoadingSpinner";

import SideMarginWrapper from "../../style/SideMarginWrapper";
import ImageSlide from "./components/ImageSlide";
import visibillityIcon from "../../assets/visibility.svg";
import locationIcon from "../../assets/location.svg";
import reportIcon from "../../assets/report.svg";
import * as S from "./styled";

// 매물 단건 조회 비동기 요청
import getProduct from "../../api/products_api/getProduct";

// 날짜 계산기
import pastTimeCalculator from "../../util/pastTimeCalculator";

// 매물 상세 페이지(거래 페이지)
const Trade = () => {
    const navigate = useNavigate();
    const {
        data: product,
        error,
        isLoading,
        isError,
    } = useQuery(["productInfo"], getProduct, {
        select: (data) => ({
            ...data,
            created_at: pastTimeCalculator(data.created_at),
        }),
    });

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (isError) {
        console.log(error);
        
        return navigate("error");
    }

    return (
        <SideMarginWrapper>
            <S.Wrapper>
                <ImageSlide item_images_url={product.item_images_url} />
                <div className="trade__info-wrapper">
                    {/* 매물 제목 */}
                    <h1 className="trade__title">{product.item_name}</h1>
                    {/* 매물 가격 */}
                    <span className="trade__price">
                        {product.item_price.toLocaleString()}
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
                            <span>api 명세에 아직 추가 안됨</span>
                        </div>
                        <span className="trade__details__created-at">
                            {product.created_at}
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
                    <pre className="trade__content">{product.item_detail}</pre>
                    {/* 매물 거래 지역 */}
                    <div className="trade__area-range">
                        <img
                            className="trade__icon"
                            src={locationIcon}
                            aria-label="location icon"
                            alt="location icon"
                        />
                         멤버 단건 조회로 가져와야됨
                    </div>
                    <div className="trade__btn-container">
                        <button type="button" className="trade__consider-btn">
                            찜하기
                        </button>
                        <button type="button" className="trade__chat-btn">
                            헬스톡
                        </button>
                    </div>
                </div>
            </S.Wrapper>
        </SideMarginWrapper>
    );
};

export default Trade;
