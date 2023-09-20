import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isLogin } from "../../recoil/login/atom";
import chatBubble from "../../assets/chat_bubble.svg"

import ChatContainer from "./components/ChatContainer";

import * as S from "./styled";

const FixedChat = () => {
    const login = useRecoilValue(isLogin);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {login && (
                <S.Wrapper>
                    <S.Container>
                        {isOpen && <ChatContainer />}
                        <S.ChatButton
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <img src={chatBubble} alt="헬스톡" />
                        </S.ChatButton>
                    </S.Container>
                </S.Wrapper>
            )}
        </>
    );
};

export default FixedChat;
