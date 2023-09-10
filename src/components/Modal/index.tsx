import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";
import * as S from "./styled";

import { useScrollLock } from "../../hooks/useScrollLock";

interface IModalProps {
    onClose: () => void,
    closeOnOutsideClick?: boolean,
    children: ReactNode,
    // setter: 한 컴포넌트 내 여러모달창이 필요할 경우 각 모달을 띄울 상태 값을 변경해줄 setter
    // 이후 모달이 닫힐 때 받은 setter를 이용해 각 상태값을 관리
    setter?: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ onClose, closeOnOutsideClick=true, children, setter }: IModalProps) => {
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
                if(setter) setter(false);
            }
        }

        // 모달이 제거되면 스크롤 잠금해제
        return () => { 
            unLockScroll(); 
            if(setter) setter(false);
        }
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
