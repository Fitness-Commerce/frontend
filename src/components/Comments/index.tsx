import { useState, FormEvent, useRef } from "react";
import { useRecoilValue } from "recoil";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import useAuth from "../../hooks/useAuth";
import { isLogin } from "../../recoil/login/atom";

// 댓글 목록
import CommentContent from "./CommentContent";

import getProductComments, {
    productCommentType,
} from "../../api/products_api/getProductComments";
import getPostComments, {
    postCommentType,
} from "../../api/posts_api/getPostComments";
import createProductComment from "../../api/products_api/createProductComment";
import createPostComment from "../../api/posts_api/createPostComment";

import Pagination from "../Pagination";

import * as S from "./styled";
import addCommentSVG from "../../assets/add_comment.svg";
import commentSVG from "../../assets/comment.svg";

interface CommentsProps {
    route: string;
    id: number;
}

const Comments = ({ route, id }: CommentsProps) => {
    const excuteCreateComment = useAuth(
        route === "product" ? createProductComment : createPostComment
    );
    const queryClient = useQueryClient();
    const [page, setPage] = useState(1);
    const login = useRecoilValue(isLogin);
    const [comments, setComments] = useState<
        postCommentType | productCommentType
    >({ totalPages: 0, content: [] });

    let query = useQuery(
        ["comments", route],
        () => getProductComments({ itemId: id }),
        {
            keepPreviousData: true,
            enabled: route === "product",
            onSuccess: (data) => setComments(data),
        }
    );

    query =
        useQuery(["comments", route], () => getPostComments({ postId: id }), {
            keepPreviousData: true,
            enabled: route === "post",
            onSuccess: (data) => setComments(data),
        }) || query;

    const commentInputRef = useRef<HTMLTextAreaElement>(null);

    // 새로운 댓글 추가
    const addComment = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (commentInputRef.current) {
            await excuteCreateComment(id, commentInputRef.current.value);
            queryClient.refetchQueries(["comments", route]);
        }
    };

    if (query.isError) throw query.error;

    return (
        <S.CommentContainer>
            {/* 새로운 댓글 작성 */}
            <h2>
                <img src={addCommentSVG} alt="add comment icon" />
                <span>댓글 쓰기</span>
            </h2>
            <form onSubmit={(e) => addComment(e)}>
                {login ? (
                    <>
                        <textarea
                            ref={commentInputRef}
                            placeholder="댓글을 작성해주세요"
                            disabled={query.status !== "success"}
                        />

                        <button
                            type="submit"
                            disabled={query.status !== "success"}
                        >
                            댓글입력
                        </button>
                    </>
                ) : (
                    <div className="comment_form_login-alert">
                        로그인이 필요한 서비스입니다
                    </div>
                )}
            </form>

            <S.Separator />

            {/* 기존의 댓글 표시 */}
            <h2>
                <img src={commentSVG} alt="comment icon" />
                <span>댓글 목록</span>
            </h2>
            {query.status !== "loading" &&
                comments.content?.length > 0 &&
                comments.content.map((comment) => (
                    <S.CommentContent key={comment.id}>
                        <CommentContent comment={comment} />
                    </S.CommentContent>
                ))}

            {/* 댓글 페이지네이션 */}
            {query.status !== "loading" && (
                <Pagination
                    currentPage={page}
                    totalPages={comments.totalPages}
                    onPageChange={(selectedPage) => setPage(selectedPage)}
                />
            )}
        </S.CommentContainer>
    );
};

export default Comments;
