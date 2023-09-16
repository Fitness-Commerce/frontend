import { useSetRecoilState } from "recoil";
import { SelectedCategoryState } from "../../../../recoil/products/atom";

import * as S from "./styled";

function CategoryButton({ title, id }: { title: string; id: number }) {
    const selectCategory = useSetRecoilState(SelectedCategoryState);
    return (
        <S.Wrapper>
            <button
                type="button"
                className="products__category-btn"
                onClick={() => selectCategory(id.toString())}
            >
                {title}
            </button>
        </S.Wrapper>
    );
}

export default CategoryButton;
