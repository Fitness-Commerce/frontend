import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./styled";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useScrollLock } from "../../hooks/useScrollLock";

const LoginModal = ({ setIsLoginModalOpen }: ILoginModalProp) => {
    const [isLogin, setIsLogin] = useState(true);
    const modalRef = useRef<HTMLDivElement>(null);
    const { lockScroll, unLockScroll } = useScrollLock();

    const onClickLogin = useCallback(() => {
        setIsLogin(true);
    }, [])
    const onClickSignUp = useCallback(() => {
        setIsLogin(false);
    }, [])
    const onClickClose = useCallback(() => {
        setIsLoginModalOpen(false);
    }, [setIsLoginModalOpen])

    useEffect(() => {
        lockScroll(); // modal render시 스크롤 막기

        const modalHandler = (event: MouseEvent) => {
            // 마우스 이벤트의 발생지점이 모달 외부일 경우 모달창 제거
            if(modalRef.current && event.target instanceof Node && !modalRef.current.contains(event.target)) {
                setIsLoginModalOpen(false);
            }
        }
        // 이벤트 핸들러 등록
        document.addEventListener('mousedown', modalHandler);

        // 이벤트 핸들러 정리 및 스크롤 잠금 해제
        return () => {
            document.removeEventListener('mousedown', modalHandler);
            unLockScroll();
        }
    }, [])
    
    return (
        <S.Modal >
            <div ref={modalRef} className="container">
                <div className="container__left">
                    <span className="container__left__welcome">Welcome!</span>
                    <h1 className="container__left__title">H+</h1>
                    {
                        isLogin ? (
                        <span className="container__left__guide">
                            아직 회원이 아니신가요? <button onClick={ onClickSignUp } className="container__left__guide__btn">회원가입</button>
                        </span>
                        ) : (
                        <span className="container__left__guide">
                            이미 회원이신가요? <button onClick={ onClickLogin } className="container__left__guide__btn">로그인</button>
                        </span>
                        )
                    }
                </div>
                <div className="container__right">
                {
                    isLogin ? <LoginForm setIsLoginModalOpen={setIsLoginModalOpen} onClickFn={setIsLogin} /> : <SignUpForm setIsLoginModalOpen={setIsLoginModalOpen} onClickFn={setIsLogin} />
                }
                </div>
            </div>
            <button onClick={onClickClose} className="modal__close-btn">X</button>
        </S.Modal>
    );
}

export default LoginModal;


export interface ILoginModalProp {
    setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onClickFn?: React.Dispatch<React.SetStateAction<boolean>>;
}