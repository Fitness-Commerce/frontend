import { useRecoilState, useRecoilValue } from "recoil";
import {
    selectedChatRoomState,
    selectedItemIdState,
} from "../recoil/chat/atom";
import { useEffect } from "react";
import { isSelectedChatRoom } from "../recoil/chat/selector";

interface selectedChatType {
    roomId: string;
    itemId: number;
}

const useChatRoomState = () => {
    // selectedChatRoomId: 현재 선택된 채팅방 id 반환 (주의! false일때도 false 그대로 반환)
    const [selectedChatRoomId, setSelectedChatRoom] = useRecoilState(
        selectedChatRoomState
    );

    // selectedItemId: 현재 채팅방이 이미 존재하는지 여부 확인 용도
    // : 채팅방 목록(list)에 이미 해당 itemId로 생성된 채팅방이 존재하면 중복생성될 여지가 있음
    const [selectedItemId, setSelectedItemId] =
        useRecoilState(selectedItemIdState);

    // 채팅방 선택 유무 확인
    const isSelected = useRecoilValue(isSelectedChatRoom);

    // 채팅방 선택
    const onChatSelect = ({ roomId, itemId }: selectedChatType) => {
        setSelectedChatRoom(roomId);
        setSelectedItemId(itemId);
    };

    // 채팅방 나가기
    const onChatClose = () => {
        setSelectedChatRoom("");
        setSelectedItemId(0);
    };

    // 컴포넌트 언마운트시 초기화
    useEffect(() => {
        return onChatClose;
    }, []);

    return {
        isSelected,
        selectedChatRoomId,
        selectedItemId,
        onChatSelect,
        onChatClose,
    };
};

export default useChatRoomState;
