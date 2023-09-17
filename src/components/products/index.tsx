import SideMarginWrapper from "../../style/SideMarginWrapper.tsx";
import ProductCard from "./ProductCard.tsx";
import * as S from "./styled.ts";

// Temp
import { dummyItems } from "../../../dummy.ts";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <SideMarginWrapper>
            <S.Products>
                <div className="products__title">
                    <h3>최신매물</h3>
                    <Link to="/products"><button className="product__view-more-btn">더보기</button></Link>
                </div>
                <div className="products__box">
                    <div>
                        <ProductCard props={ dummyItems[0] } />
                        <ProductCard props={ dummyItems[0] } />
                        <ProductCard props={ dummyItems[0] } />
                        <ProductCard props={ dummyItems[0] } />
                        <ProductCard props={ dummyItems[0] } />
                        <ProductCard props={ dummyItems[0] } />
                    </div>
                    <div>
                        <ProductCard props={ dummyItems[0] } />
                        <ProductCard props={ dummyItems[0] } />
                        <ProductCard props={ dummyItems[0] } />
                        <ProductCard props={ dummyItems[0] } />
                        <ProductCard props={ dummyItems[0] } />
                        <ProductCard props={ dummyItems[0] } />
                    </div>
                </div>
            </S.Products>
        </SideMarginWrapper>
    );
}

export default Products;