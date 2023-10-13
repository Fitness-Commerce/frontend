import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isLogin } from "../../recoil/login/atom";

import ChatContainer from "./components/ChatContainer";

import * as S from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const FixedChat = () => {
    const login = useRecoilValue(isLogin);
    const [isOpen, setIsOpen] = useState(false);

    // 외부 클릭, esc키로 채팅방 닫기
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target;
            if(target instanceof Element && target.closest("#chat-btn")) return;
            if (
                isOpen &&
                target instanceof Element &&
                (!target.closest("#chat-container") || target.closest("#fixed-chat-close-btn"))
            ) {
                setIsOpen(false);
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (isOpen && event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isOpen]);

    return (
        <>
            {login && (
                <S.Wrapper>
                    <S.Container  id="chat-container">
                        {isOpen && <ChatContainer />}
                        <S.ChatButton
                            id="chat-btn"
                            type="button"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            <FontAwesomeIcon icon={faCommentDots} />
                            <span className="chat-btn">Chat</span>
                        </S.ChatButton>
                    </S.Container>
                </S.Wrapper>
            )}
        </>
    );
};

export default FixedChat;
