import * as S from "./styled";


const ProductCard = ({props}: IProductCardProps) => {
    console.log(props);
    return (
        <S.ProductCard>
            <img src={props.item_images} alt={props.item_name} className="product-card__img" />
            <div className="product-card__data">
                <span className="product-card__status-wrapper"><span className="product-card__status">{props.item_status}</span></span>
                <span className="product-card__name">{props.item_name}</span>
                <span className="product-card__price">{props.item_price}</span>
                <span className="product-card__local&time">서울특별시 곽악구 ({props.created_at})</span>
            </div>
        </S.ProductCard>
    );
}

export default ProductCard;

interface IProductCardProps {
    props: {
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
    }
}