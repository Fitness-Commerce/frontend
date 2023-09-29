import { useQuery } from "@tanstack/react-query";

import getMemberProfile from "../../api/test_api/getMemberProfile";
import pastTimeCalculator from "../../util/pastTimeCalculator";

import * as S from "./styled";

// FIXME: 프로필 사진 더미 하드코딩
import profile from "../../assets/profile.jpeg";

import { productCommentContentType } from "../../api/products_api/getProductComments";
import { postCommentContentType } from "../../api/posts_api/getPostComments";

interface CommentContentType {
    comment: productCommentContentType | postCommentContentType;
}

const CommentContent = ({ comment }: CommentContentType) => {
    const {
        data: nickname,
        status,
        isError,
        error,
    } = useQuery(
        [
            "commentProfile",
            comment.memberId,
            comment.id,
            "postId" in comment ? comment.postId : comment.itemId,
        ],
        () => getMemberProfile(comment.memberId),
        {
            keepPreviousData: true,
            select: (data) => data.nickname,
        }
    );

    if (isError) console.log(error);

    return (
        <S.CommentContent>
            {isError ? (
                "정보를 가져오지 못했습니다"
            ) : (
                <>
                    <div className="comment_profile">
                        <img src={profile} alt="profile image" />
                        <span>{status !== "loading" ? nickname : "user"}</span>
                    </div>
                    <div className="comment_details">
                        <p>{comment.content}</p>
                        <span>
                            {pastTimeCalculator(
                                comment.updated_at || comment.created_at
                            )}
                        </span>
                    </div>
                </>
            )}
        </S.CommentContent>
    );
};

export default CommentContent;
