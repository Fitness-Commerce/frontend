import SideMarginWrapper from "../../style/SideMarginWrapper";
import * as S from "./styled";

import PostsListLayout from "./components/PostsListLayout";
import PostCategoryButton from "./components/PostCategoryButton";

//FIXME: 더미데이터
import { dummyPostCategories } from "../../../dummy";

const Community = () => {
    return (
        <SideMarginWrapper>
            <S.CommunityTitle>
                <h1 className="community__title">
                    커뮤니티
                </h1>
            </S.CommunityTitle>
            <S.CommunityCategory>
                <ul className="community__post-boards-wrapper">
                    {dummyPostCategories.map(category => {
                        return (
                            <PostCategoryButton key={self.crypto.randomUUID()}>
                                {category}
                            </PostCategoryButton>
                        )
                    })}
                </ul>
            </S.CommunityCategory>
            <PostsListLayout />
        </SideMarginWrapper>
    );
};

export default Community;
