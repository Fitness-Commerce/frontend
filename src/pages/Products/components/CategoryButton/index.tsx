import * as S from "./styled";

interface CategoryButtonProps {
    children: string;
}

function CategoryButton({ children }: CategoryButtonProps) {
    return (
        <S.Wrapper>
            <button type="button" className="products__category-btn">{children}</button>
        </S.Wrapper>
    );
}

export default CategoryButton;
