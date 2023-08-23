import * as S from "./styled";

interface PostCategoryButtonProps {
    children: string;
}

const PostCategoryButton = ({children}: PostCategoryButtonProps) => {
    return ( 
        <S.Wrapper>
            <button type="button" className="community__post-board-btn">
                {children}
            </button>
        </S.Wrapper>
     );
}

export default PostCategoryButton;