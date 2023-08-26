import { useQuery } from "@tanstack/react-query"

import * as S from "./styled";

import PostList from "./PostList";

//FIXME: 더미데이터
// import { dummyPostList } from "../../../../../dummy";
import fetchPostsList from "../../../../api/posts_api/fetchPostsList";

const PostsListLayout = () => {
    const {data: postList, error, isLoading, isError } = useQuery(["postList"], fetchPostsList)

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError){
        const message = (error instanceof Error) ? error.message : 'An error occurred';
        return <div>{message}</div>
    }
    
    return (
        <S.Wrapper>
            {postList?.map((post) => {
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
