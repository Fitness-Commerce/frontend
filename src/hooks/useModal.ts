import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../recoil/modal/atom";

const useModal = () => {
    // Recoil을 통해 관리되는 modal 상태변수를 이용
    const [isOpen, setIsOpen] = useRecoilState(modalState);

    // 모달을 활성화 시켜주는 함수
    const openModal = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    // 모달 비활성화 시켜주는 함수
    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen])

    return { isOpen, openModal, closeModal }
}

export default useModal;