import * as S from "./styled";

interface PostCategoryButtonProps {
    // children: {
    //     id: number;
    //     title: string;
    //     post_ids: number[];
    //     created_at: string;
    //     updated_at: string;
    //  };
    id: number;
    title: string;
}

const PostCategoryButton = ({id, title}: PostCategoryButtonProps) => {
    return ( 
        <S.Wrapper>
            <button type="button" className="community__post-category-btn">
                <S.CategoryLink to={`/community?category-id=${id}`}>{title}</S.CategoryLink>
            </button>
        </S.Wrapper>
     );
}

export default PostCategoryButton;