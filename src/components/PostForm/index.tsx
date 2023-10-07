import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth.js";

import ReactQuill from "react-quill";

import LoadingSpinner from "../LoadingSpinner";
import PostEditor from "./PostEditor";

import createPost from "../../api/posts_api/createPost";
import putPost from "../../api/posts_api/putPost";
import getPostCategories from "../../api/posts_api/getPostCategories";

import base64toFile from "../../util/base64toFile";
import calculateNumber from "../../util/calculateNumber";

import { getPostCategoriesType } from "../../api/posts_api/getPostCategories";

import * as S from "./styled";

interface PostFormProps {
    setIsPostForm: React.Dispatch<React.SetStateAction<boolean>>;
    modify?: {
        id: string;
        title: string;
        category: string;
        content: string;
    };
}

const PostForm = ({ setIsPostForm, modify }: PostFormProps) => {
    const navigate = useNavigate();
    const excuteCreatePost = useAuth(createPost);
    const excutePutPost = useAuth(putPost)
    // FIXME: community 페이지하고 비동기 요청 겹침 => 로그인 할 때 목록 받아와야됨
    const {
        data: postCategries,
        isLoading,
        isError,
        error,
    } = useQuery(["postCategory"], getPostCategories);

    const titleRef = useRef(modify ? modify.title : "");
    const communityRef = useRef(modify ? modify.category : "");
    const quillRef = useRef<ReactQuill | null>(null);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (isError) {
        throw error;
    }

    const handleSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!window.confirm("글을 업로드 하시겠습니까?")) return;
        if (quillRef && quillRef.current) {
            const formData = new FormData();
            const editorContents = quillRef.current.getEditor().getContents();
            const counter = calculateNumber();

            // quill 에디터에서 이미지 base64 추출 => File 객체로 변환
            if (editorContents.ops) {
                for (const op of editorContents.ops) {
                    if (op.insert && op.insert.image) {
                        const index = counter.increase();
                        formData.append(
                            `images`,
                            base64toFile(op.insert.image, `image${index}`) // File 데이터
                        );
                    }
                }
                counter.reset();
            }

            // formData <= 'images' : image0, 'images' : image1, 'images' : image2

            // content에 인코딩된 이미지들을 image(번호)로 대체
            const postContent = editorContents.ops?.map((op) => {
                const image = op.insert.image;
                if (image) {
                    op.insert.image = `image${counter.increase()}`;
                }
                console.dir(op);
                return op;
            });

            // 커뮤니티, 제목, 본문을 formData에 추가
            formData.append("postCategoryTitle", communityRef.current);
            formData.append("title", titleRef.current);
            formData.append("content", JSON.stringify(postContent));

            // create 요청 성공시 해당 게시글로 이동
            const postRequestCall = async () => {
                try {
                    const postId = modify
                        ? await excutePutPost(formData, modify.id)
                        : await excuteCreatePost(formData);

                    navigate(`/post/${postId}`);
                } catch (err) {
                    console.log(err);
                }
            };

            postRequestCall();
        }
    };

    return (
        <S.Container onSubmit={handleSubmitPost}>
            <S.TitleWrapper>
                <S.TitleInput
                    type="text"
                    placeholder={modify?.title || "제목을 입력해주세요"}
                    onChange={(e) => (titleRef.current = e.target.value)}
                    required
                />
                <S.CategorySelect
                    onChange={(e) => communityRef.current = e.target.value}
                    value={modify?.category}
                    required
                >
                    {postCategries.map((category: getPostCategoriesType) => {
                        return (
                            <option value={category.title} key={category.id}>
                                {category.title}
                            </option>
                        );
                    })}
                </S.CategorySelect>
            </S.TitleWrapper>
            <PostEditor
                quillRef={quillRef}
                value={modify ? modify.content : ""}
                placeholder="내용을 입력해주세요."
            />
            <S.ButtonWrapper>
                <S.CancleButton onClick={() => setIsPostForm(false)}>
                    취소
                </S.CancleButton>
                <S.SubmitButton type="submit">작성</S.SubmitButton>
            </S.ButtonWrapper>
        </S.Container>
    );
};

export default PostForm;
