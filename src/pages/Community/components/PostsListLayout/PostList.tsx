import { Link } from "react-router-dom";

import * as S from "./styled";

interface PostListProps {
    id: number;
    author: string;
    title: string;
    viewCount: number;
    createdAt: string;
    updatedAt?: string;
}

const PostList = (props: PostListProps) => {
    return (
        <S.PostList>
            <div className="post-list__title">
                <Link to={`/post?post-id=${props.id}`}>{props.title}</Link>
            </div>
            <div className="post-list__author">
                <span>{props.author}</span>
            </div>
            <span className="post-list__created-at">{props.createdAt}</span>
            <span className="post-list__view-count">{props.viewCount}</span>
        </S.PostList>
    );
};

export default PostList;
