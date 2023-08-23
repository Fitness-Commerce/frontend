import * as S from "./styled";

interface PostListProps {
    postId: number;
    postTitle: string;
    author: string;
    viewCount: number;
    created_at: string;
}

const PostList = (props: PostListProps) => {
    return (
        <S.PostList>
            <div className="post-list__title">
                <span>{props.postTitle}</span>
            </div>
            <div className="post-list__author">
                <span>{props.author}</span>
            </div>
            <span className="post-list__created-at">{props.created_at}</span>
            <span className="post-list__view-count">{props.viewCount}</span>
        </S.PostList>
    );
};

export default PostList;
