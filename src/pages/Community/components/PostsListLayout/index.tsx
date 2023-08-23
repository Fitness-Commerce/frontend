import * as S from "./styled";

import PostList from "./PostList";

//FIXME: 더미데이터
import { dummyPostList } from "../../../../../dummy";

const PostsListLayout = () => {
    return (
        <S.Wrapper>
            {dummyPostList.map((post) => {
                return (
                    <PostList
                        key={post.postId}
                        postId={post.postId}
                        postTitle={post.postTitle}
                        author={post.author}
                        viewCount={post.viewCount}
                        created_at={post.created_at}
                    />
                );
            })}
        </S.Wrapper>
    );
};

export default PostsListLayout;
