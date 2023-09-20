import * as S from "../styled";
import chatBubble from "../../../assets/chat_bubble.svg";

const ChatLogo = () => {
    return (
        <S.ChatButton>
            <img src={chatBubble} alt="헬스톡" />
        </S.ChatButton>
    );
};

export default ChatLogo;
