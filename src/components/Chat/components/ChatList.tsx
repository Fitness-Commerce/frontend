import { useQueryClient } from "@tanstack/react-query";

import { chatListType } from "../../../api/chat_api/getChatList";

import * as S from "../styled";
import useChatRoomState from "../../../hooks/useChatRoomState";

const ChatList = () => {
    const queryClient = useQueryClient();
    const chatList =
        queryClient.getQueryData<chatListType[]>(["chatRoomList"]) || [];
    const { onChatSelect } = useChatRoomState();

    const handleOnChatSelect = (roomId: string, itemId: number) => {
        const data = {
            roomId: roomId,
            itemId: itemId,
        };
        onChatSelect(data);
    };

    return (
        <S.ChatList>
            {chatList.map((chatRoom: chatListType) => (
                <button
                    type="button"
                    key={chatRoom.roomId}
                    onClick={() =>
                        handleOnChatSelect(
                            chatRoom.roomId.toString(),
                            chatRoom.itemId
                        )
                    }
                >
                    {chatRoom.opponentNickname}
                    {chatRoom.lastMessage}
                </button>
            ))}
        </S.ChatList>
    );
};

export default ChatList;
