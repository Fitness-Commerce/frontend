import { useSetRecoilState } from "recoil";
import { SelectedCategoryState } from "../../../../recoil/products/atom";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";

function CategoryButton({ title, id }: { title: string; id: number }) {
    const selectCategory = useSetRecoilState(SelectedCategoryState);
    const navigate = useNavigate();
    return (
        <S.Wrapper>
            <button
                type="button"
                className="products__category-btn"
                onClick={() => {
                    selectCategory(id.toString());
                    navigate("/products")
                }}
            >
                {title}
            </button>
        </S.Wrapper>
    );
}

export default CategoryButton;
