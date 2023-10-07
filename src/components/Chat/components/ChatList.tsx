import { Dispatch, SetStateAction } from "react";
import { chatListType } from "../../../api/chat_api/getChatList";

import * as S from "../styled";

interface ChatListProps {
    chatRoomList: chatListType[];
    setChatRoom: Dispatch<SetStateAction<number>>;
}

const ChatList = ({ chatRoomList, setChatRoom }: ChatListProps) => {
    return (
        <S.ChatList>
            {chatRoomList.length > 0 ? (
                chatRoomList.map((chatRoom: chatListType) => (
                    <button
                        type="button"
                        key={chatRoom.roomId}
                        onClick={() => setChatRoom(chatRoom.itemId)}
                    >
                        {chatRoom.opponentNickname}
                        {chatRoom.lastMessage}
                    </button>
                ))
            ) : (
                <p>아직 채팅방이 존재하지 않습니다</p>
            )}
        </S.ChatList>
    );
};

export default ChatList;
