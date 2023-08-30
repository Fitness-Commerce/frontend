import { ReactNode, useEffect, useRef } from "react";
import * as S from "./styled";

import { useScrollLock } from "../../hooks/useScrollLock";

interface IModalProps {
    onClose: () => void,
    closeOnOutsideClick?: boolean,
    children: ReactNode,
}

const Modal = ({ onClose, closeOnOutsideClick=true, children }: IModalProps) => {
    const { lockScroll, unLockScroll } = useScrollLock();
    const modalRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        // 모달이 레던링 되면 전체스크롤 잠금
        lockScroll();

        // closeOnOutsideClick이 true이면 모달 창을 닫는 이벤트함수 등록
        if(closeOnOutsideClick) {
            const modalHandler = (event: MouseEvent) => {
                // 마우스 이벤트의 발생지점이 모달 외부일 경우 모달창 제거
                if(modalRef.current && event.target instanceof Node && !modalRef.current.contains(event.target)) {
                    onClose();
                }
            }
            // 등록
            document.addEventListener('mousedown', modalHandler);

            // 외부 클릭시 닫힐경우 스크롤 잠금해제와 이벤트 리스너 제거
            return () => {
                unLockScroll();
                document.removeEventListener('mousedown', modalHandler);
            }
        }

        // 모달이 제거되면 스크롤 잠금해제
        return () => { unLockScroll(); }
    });

    return (
        <S.Modal>
            <div ref={modalRef} className="modal__container">
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                {children}
            </div>
        </S.Modal>
    );
}

export default Modal;
