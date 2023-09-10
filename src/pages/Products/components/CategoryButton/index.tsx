import * as S from "./styled";

function CategoryButton({title}: {title: string}) {
    return (
        <S.Wrapper>
            <button type="button" className="products__category-btn">{title}</button>
        </S.Wrapper>
    );
}

export default CategoryButton;
