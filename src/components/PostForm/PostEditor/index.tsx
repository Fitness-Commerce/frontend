import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { StyledQuill } from "./styled";
// 사용하고 싶은 옵션, 나열 되었으면 하는 순서대로 나열
const toolbarOptions = [
    ["link", "image"],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
];

// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "background",
    "color",
    "link",
    "image",
    "width",
];

const modules = {
    toolbar: {
        container: toolbarOptions,
    },
};

const PostEditor = ({
    placeholder,
    value,
    quillRef,
    ...rest
}: {
    placeholder?: string;
    value?: ReactQuill.Value;
    quillRef: React.MutableRefObject<ReactQuill | null>;
}) => {
    // FIXME: Delta 입력값 확인용 코드
    const handleOnChange = () => {
        if (quillRef.current) {
            console.log(quillRef.current.getEditor().getContents());
        }
    };

    return (
        <StyledQuill
            {...rest}
            ref={quillRef}
            placeholder={placeholder || "내용을 입력해주세요."}
            value={value || ""}
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={() => handleOnChange()}
            preserveWhitespace
        ></StyledQuill>
    );
};

export default PostEditor;
