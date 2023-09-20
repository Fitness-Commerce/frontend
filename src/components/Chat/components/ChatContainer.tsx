import { useQuery } from "@tanstack/react-query";
import useChatRoomState from "../../../hooks/useChatRoomState";

import useAuth from "../../../hooks/useAuth";

import ChatList from "./ChatList";
import ChatRoom from "./ChatRoom";

import getChatList, {chatListType} from "../../../api/chat_api/getChatList";
import getMyProfile from "../../../api/test_api/getMyProfile";

import * as S from "../styled";
import LoadingSpinner from "../../LoadingSpinner";
import { useEffect, useState } from "react";

const ChatContainer = () => {
    const excuteGetChatList = useAuth(getChatList);

    // TODO: 유저 id는 프리패칭 되도록 만들어야됨
    const excuteGetMyProfile = useAuth(getMyProfile);
    const {
        data: userProfile,
        isError: isProfileError,
        error: profileError,
        isLoading: isProfileLoading,
    } = useQuery(["myProfile"], excuteGetMyProfile);

    // 유저 id 가져온 후 채팅방 목록 가져오기
    const {
        data: chatRoomList,
        isError,
        isLoading,
        error,
    } = useQuery(["chatRoomList"], () => excuteGetChatList(userProfile.id), {
        enabled: !!userProfile,
    });

    // 채팅방이 선택되면 ChatList 대신 ChatRoom이 열리게 됨
    const { isSelected, selectedChatRoomId, selectedItemId } = useChatRoomState();

    // 채팅방을 새로 생성할지 여부 결정 (ChatRoom 컴포넌트에 prop으로 내려줌)
    const [willCreate, setWillCreate] = useState(false);

    // itemId가 채팅방 목록에 없으면 채팅방 개설
    useEffect(() => {
        if (isSelected && chatRoomList) {
            chatRoomList.forEach((chatRoom: chatListType) => {
                if(chatRoom.itemId === selectedItemId) {
                    setWillCreate(true);
                }
            })
        }
    }, [selectedChatRoomId, selectedItemId]);

    if (isError || isProfileError) console.log(error || profileError);

    return (
        <S.ChatContainer>
            {isLoading || isProfileLoading ? (
                <LoadingSpinner />
            ) : isError || isProfileError ? (
                <p>채팅방을 가져오지 못했습니다</p>
            ) : isSelected ? (
                <ChatRoom userProfile={userProfile} willCreate={willCreate} />
            ) : (
                <ChatList />
            )}
        </S.ChatContainer>
    );
};

export default ChatContainer;
