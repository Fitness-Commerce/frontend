import { Dispatch, SetStateAction } from "react";
import { chatListType } from "../../../api/chat_api/getChatList";

import * as S from "../styled";

import pastTimeCalculator from "../../../util/pastTimeCalculator";
import SVGComponent from "../../../assets/guide_arrow.svg?react";
import defaultuserProfile from "../../../assets/defaultuser_image.jpg";

interface ChatListProps {
    userNickname: string;
    chatRoomList: chatListType[];
    setChatRoom: Dispatch<SetStateAction<number>>;
}

const ChatList = ({
    userNickname,
    chatRoomList,
    setChatRoom,
}: ChatListProps) => {
    return (
        <S.ChatList>
            <button className="chat-list__header__btn">
                <SVGComponent id="fixed-chat-close-btn" className="chat-list__header__btn__exit-img" />
                <span className="chat-list__header__btn__username">
                    {userNickname}
                </span>
            </button>

            {chatRoomList.length > 0 ? (
                chatRoomList.map((chatRoom: chatListType) => (
                    <S.ChatListPreview
                        key={chatRoom.roomId}
                        onClick={() => setChatRoom(chatRoom.itemId)}
                    >
                        <div className="chat-list-prev__left">
                            <img
                                width="40"
                                height="40"
                                src={defaultuserProfile}
                                alt="profile image"
                                className="chat-list-prev__img"
                            />
                            
                            <span className="chat-list__chat-room__opponent-nickname">
                                {chatRoom.opponentNickname}
                            </span>
                        </div>
                        <div className="chat-list-prev-middle">
                            <span className="chat-list__chat-room__opponent-nickname">
                                {chatRoom.itemName}
                            </span>
                            <span className="chat-list__chat-room__last-message">
                                {chatRoom.lastMessage}
                            </span>
                        </div>
                        <span className="chat-list-prev-right">
                            {pastTimeCalculator(chatRoom.lastMessageTime)}
                        </span>
                    </S.ChatListPreview>
                ))
            ) : (
                <p>아직 채팅방이 존재하지 않습니다</p>
            )}
        </S.ChatList>
    );
};

export default ChatList;
