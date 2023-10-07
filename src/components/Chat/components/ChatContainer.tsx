import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import useAuth from "../../../hooks/useAuth";

import ChatList from "./ChatList";
import ChatRoom from "./ChatRoom";

import getChatList from "../../../api/chat_api/getChatList";
import getMyProfile from "../../../api/test_api/getMyProfile";

import * as S from "../styled";
import LoadingSpinner from "../../LoadingSpinner";

interface ChatContainerProps {
    itemId?: number;
}

const ChatContainer = ({ itemId }: ChatContainerProps) => {
    const excuteGetChatList = useAuth(getChatList);
    const excuteGetMyProfile = useAuth(getMyProfile);

    // TODO: 유저 id는 프리패칭 되도록 만들어야됨
    const {
        data: userProfile,
        isError: isProfileError,
        error: profileError,
        isLoading: isProfileLoading,
    } = useQuery(["myProfile"], excuteGetMyProfile);

    // 유저 id 가져온 후 채팅방 목록 가져오기
    const {
        data: chatRoomList,
        isError: isChatRoomListError,
        isLoading: isChatRoomListLoading,
        error: chatRoomListError,
        isPaused,
    } = useQuery(["chatRoomList"], () => excuteGetChatList(userProfile.id), {
        enabled: !!userProfile,
    });

    const [chatRoom, setChatRoom] = useState(itemId || 0);

    // ChatRoom 컴포넌트 뒤로가기용 onClick 함수
    const onGoBackToList = () => {
        setChatRoom(0);
    };

    // 로그만 띄움 / 에러핸들링은 채팅창에서
    if (isChatRoomListError || isProfileError) console.log(chatRoomListError || profileError);

    return (
        <S.ChatContainer>
            {isChatRoomListLoading || isProfileLoading ? (
                <LoadingSpinner />
            ) : isChatRoomListError || isProfileError || isPaused ? (
                <p>채팅방을 가져오지 못했습니다</p>
            ) : chatRoom > 0 ? (
                <ChatRoom itemId={chatRoom} onGoBackToList={onGoBackToList} />
            ) : (
                <ChatList
                    chatRoomList={chatRoomList}
                    setChatRoom={setChatRoom}
                />
            )}
        </S.ChatContainer>
    );
};

export default ChatContainer;
