import * as S from "./styled";
import dummyImage from "../../../../assets/product1.webp";
import ProductType from "../../../../interface/Products";

interface ProductCardProps {
    product: ProductType;
    layout: boolean;
}

// info: 상품 정보, layout: 그리드 or 리스트
const ProductCard = ({ product, layout }: ProductCardProps) => {
    return (
        <S.ProductCard $isGrid={layout}>
            <div className="product-card__img-wrapper">
                <img
                    className="product-card__img"
                    src={product.itemImagesUrl[0].toString() || dummyImage}
                    alt={product.itemName}
                />
            </div>
            <div className="product-card__data">
                <div className="product-card__status-wrapper">
                    <span className="product-card__status">
                        {product.itemStatus}
                    </span>
                </div>
                {/* 그리드/리스트 레이아웃 전환시 이름,가격 레이아웃도 변환 */}
                <div className="product-card__name-price-wrapper">
                    <span className="product-card__name">{product.itemName}</span>
                    <span className="product-card__price">
                        {`${product.itemPrice.toLocaleString("ko-KR")}원`}
                    </span>
                </div>
                {/* FIXME: 지역 이름 가져오기
                1. member_id로 거주지 정보 요청 (판매자가 다른 지역 거래 원할 경우 선택이 제한됨)
                2. item_detail에 원하는 거래지역 넣기 (이게 좀 더 깔끔하긴 함) */}
                <div>
                    <span className="product-card__local">전국</span>
                    <span className="product-card__time">
                        {product.updatedAt || product.createdAt}
                    </span>
                </div>
            </div>
        </S.ProductCard>
    );
};

export default ProductCard;
