import * as S from "./styled";
import dummyImage from "../../../../assets/product1.webp";

interface ProductCardProps {
    info: {
        item_id: number;
        member_id: number;
        item_category_id: number;
        item_name: string;
        item_detail: string;
        item_price: number;
        item_status: string;
        item_images?: string;
        created_at: string;
        updated_at?: string;
    };
    layout: boolean;
}

// info: 상품 정보, layout: 그리드 or 리스트
const ProductCard = ({ info, layout }: ProductCardProps) => {
    return (
        <S.ProductCard $isGrid={layout}>
            <div className="product-card__img-wrapper">
                <img
                    className="product-card__img"
                    src={dummyImage}
                    alt={info.item_name}
                />
            </div>
            <div className="product-card__data">
                <div className="product-card__status-wrapper">
                    <span className="product-card__status">
                        {info.item_status}
                    </span>
                </div>
                {/* 그리드/리스트 레이아웃 전환시 이름,가격 레이아웃도 변환 */}
                <div className="product-card__name-price-wrapper">
                    <span className="product-card__name">{info.item_name}</span>
                    <span className="product-card__price">
                        {`${info.item_price.toLocaleString("ko-KR")}원`}
                    </span>
                </div>
                {/* FIXME: 지역 이름 가져오기
                1. member_id로 거주지 정보 요청 (판매자가 다른 지역 거래 원할 경우 선택이 제한됨)
                2. item_detail에 원하는 거래지역 넣기 (이게 좀 더 깔끔하긴 함) */}
                <div>
                    <span className="product-card__local">전국</span>
                    <span className="product-card__time">
                        {info.created_at}
                    </span>
                </div>
            </div>
        </S.ProductCard>
    );
};

export default ProductCard;
