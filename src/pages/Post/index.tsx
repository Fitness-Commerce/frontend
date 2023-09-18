import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

import PostForm from "../../components/PostForm";

import getPost from "../../api/posts_api/getPost";

import calculateNumber from "../../util/calculateNumber";

import SideMarginWrapper from "../../style/SideMarginWrapper";
import LoadingSpinner from "../../components/LoadingSpinner";
import * as S from "./styled";

const Post = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const {
        data: postData,
        isLoading,
        isError,
        error,
    } = useQuery(["postData"], () => getPost(postId as string));
    const [content, setContent] = useState("");
    const [isPostForm, setIsPostForm] = useState(false);

    useEffect(() => {
        if (postData && typeof postData.content === "string") {
            const counter = calculateNumber();
            const converter = new QuillDeltaToHtmlConverter(
                JSON.parse(postData.content),
                {
                    urlSanitizer: () => {
                        // FIXME: replace는 임시방편이고 서버에서 :8080을 포함해서 보내줘야됨
                        return postData.postImageUrl[
                            counter.increase()
                        ].replace("/api", ":8080/api");
                        // return "http://43.200.32.144:8080/home/ec2-user/imageDir/5dd1269a-d69d-4321-9203-61eef3bcfec3.png"
                    },
                }
            );
            counter.reset();

            const html = converter.convert();
            console.log(html);

            setContent(html);
        }
    }, [postData]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (isError) {
        console.log(error);
        navigate("/error");
        return <></>;
    }

    // 게시글 수정
    if (isPostForm) {
        return (
            <PostForm
                modify={{
                    id: postId as string,
                    title: postData.title,
                    category: postData.postCategoryId,
                    content: JSON.parse(postData.content),
                }}
                setIsPostForm={setIsPostForm}
            />
        );
    }

    return (
        <SideMarginWrapper>
            <S.Wrapper>
                <S.Container>
                    <S.Board>{"커뮤니티 " + postData.postCategoryId}</S.Board>
                    <hr className="post__hr" />
                    <S.Title>{postData.title}</S.Title>
                    <S.Content>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: content || (
                                    <div>아무 내용이 없습니다</div>
                                ),
                            }}
                        ></div>
                    </S.Content>
                    <div style={{ display: "flex" }}>
                        <button
                            type="button"
                            style={{ flexGrow: "1" }}
                            onClick={() => setIsPostForm(true)}
                        >
                            수정
                        </button>
                        <button
                            type="button"
                            style={{
                                flexGrow: "1",
                                backgroundColor: "rgba(0, 0, 0, 0.2)",
                            }}
                            onClick={() => alert("아직 삭제 기능 없어요 ㅠㅠ")}
                        >
                            삭제
                        </button>
                    </div>
                </S.Container>
            </S.Wrapper>
        </SideMarginWrapper>
    );
};

export default Post;
