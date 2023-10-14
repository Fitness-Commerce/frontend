import * as S from "./styled";
// import dummyImage from "../../assets/product1.webp";
import ProductType from "../../interface/Products";
import { useNavigate } from "react-router-dom";
import { TRADE } from "../../contance/routeURL";

interface ProductCardProps {
    type?: string;
    info?: ProductType;
    dashboardInfo?: {
        itemId: number;
        categoryName: string;
        itemName: string;
        itemDetail: string;
        itemPrice: number;
        itemStatus: string;
        mainImageUrl: string;
        viewCount: number;
        createdAt: string;
        updatedAt: string;
    };
    layout?: boolean;
}

// info: 상품 정보, layout: 그리드 or 리스트
// dashboardInfo: 회원(본인) 판매 상품리스트 타입
const ProductCard = ({
    type = "product",
    info,
    dashboardInfo,
    layout = false,
}: ProductCardProps) => {
    const navigate = useNavigate();
    if (type === "dashboard") {
        return (
            <S.DashboardProduct $itemStatus={dashboardInfo?.itemStatus}>
                <S.ProductCard
                    $isGrid={layout}
                    onClick={() =>
                        navigate(TRADE + `/${dashboardInfo?.itemId}`)
                    }
                >
                    <div
                        id="product-card__img-wrapper"
                        className="product-card__img-wrapper"
                    >
                        <img
                            id="product-card__img"
                            className="product-card__img"
                            src={dashboardInfo?.mainImageUrl}
                            alt={dashboardInfo?.itemName}
                        />
                    </div>
                    <div className="product-card__data">
                        <div className="product-card__status-wrapper">
                            <span
                                id="product-card__status"
                                className="product-card__status"
                            >
                                {dashboardInfo?.itemStatus}
                            </span>
                        </div>
                        {/* 그리드/리스트 레이아웃 전환시 이름,가격 레이아웃도 변환 */}
                        <div className="product-card__name-price-wrapper">
                            <span className="product-card__name">
                                {dashboardInfo?.itemName}
                            </span>
                            <span className="product-card__price">
                                {`${dashboardInfo?.itemPrice.toLocaleString(
                                    "ko-KR"
                                )}원`}
                            </span>
                        </div>
                        <div className="product-card__data__foot">
                            <span
                                id="product-card__time"
                                className="product-card__time"
                            >
                                {dashboardInfo?.createdAt}
                            </span>
                        </div>
                    </div>
                </S.ProductCard>
            </S.DashboardProduct>
        );
    }
    return (
        <S.ProductCard
            $isGrid={layout}
            onClick={() => navigate(TRADE + `/${info?.id}`)}
        >
            <div className="product-card__img-wrapper">
                <img
                    className="product-card__img"
                    // FIXME: url 로컬 서버에서 가져오는 중
                    src={
                        info?.itemImagesUrl[0]
                            // ?.toString()
                            // .replace(
                            //     "http://43.200.32.144:8080/",
                            //     "http://localhost:8080/"
                            // ) || dummyImage
                    }
                    alt={info?.itemName}
                />
            </div>
            <div className="product-card__data">
                <div className="product-card__status-wrapper">
                    <span className="product-card__status">
                        {info?.itemStatus}
                    </span>
                </div>
                {/* 그리드/리스트 레이아웃 전환시 이름,가격 레이아웃도 변환 */}
                <div className="product-card__name-price-wrapper">
                    <span className="product-card__name">{info?.itemName}</span>
                    <span className="product-card__price">
                        {`${info?.itemPrice.toLocaleString("ko-KR")}원`}
                    </span>
                </div>
                {/* FIXME: 지역 이름 가져오기
                    1. member_id로 거주지 정보 요청 (판매자가 다른 지역 거래 원할 경우 선택이 제한됨)
                    2. item_detail에 원하는 거래지역 넣기 (이게 좀 더 깔끔하긴 함) */}
                <div>
                    <span className="product-card__local">
                        {info?.transactionArea
                            .slice(0, 3)
                            .map((area, index) =>
                                index < 2 ? (
                                    <p key={area}>{area}</p>
                                ) : (
                                    <span key={area}>...</span>
                                )
                            )}
                    </span>
                    <span className="product-card__time">
                        {info?.createdAt}
                    </span>
                </div>
            </div>
        </S.ProductCard>
    );
};

export default ProductCard;
