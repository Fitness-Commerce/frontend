import { Link } from "react-router-dom";

import pastTimeCalculator from "../../../../util/pastTimeCalculator";

import * as S from "./styled";

import { postType } from "../../../../api/posts_api/getPostsList";

interface PostProps {
    post: postType
}

const Post = ({post}: PostProps) => {
    return (
        <S.PostList>
            <div className="post-list__title">
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </div>
            <div className="post-list__author">
                <span>{post.nickname}</span>
            </div>
            <span className="post-list__created-at">{pastTimeCalculator(post.updatedAt || post.createdAt)}</span>
            <span className="post-list__view-count">{post.viewCount}</span>
        </S.PostList>
    );
};

export default Post;
