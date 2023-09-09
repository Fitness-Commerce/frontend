import * as S from "./styled";

import PostList from "./PostList";

import pastTimeCalculator from "../../../../util/pastTimeCalculator";

//FIXME: 더미데이터
// import { dummyPostList } from "../../../../../dummy";

interface PostListLayoutProps {
    postList: {
        id: number;
        memberId: number;
        postCategoryId: number;
        postImageUrl: string[];
        title: string;
        content: string;
        viewCount: number;
        createdAt: string;
        updatedAt: string;
 }[];
}

const PostsListLayout = (props: PostListLayoutProps) => {
    
    return (
        <S.Wrapper>
            {props.postList?.map((post) => {
                return (
                    <PostList
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        author={post.memberId.toString()}
                        viewCount={post.viewCount}
                        createdAt={pastTimeCalculator(post.createdAt)}
                    />
                );
            })}
        </S.Wrapper>
    );
};

export default PostsListLayout;
