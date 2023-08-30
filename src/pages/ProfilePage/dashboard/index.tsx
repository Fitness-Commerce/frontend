import Modal from "../../../components/Modal";
import useModal from "../../../hooks/useModal";
import * as S from "./styled";

const Dashboard = () => {
    // isOpen: Recoil상태 (modalState)와 같은 값을 공유함[call by sharing]
    // openModal: 모달을 사용하고자 하는 컴포넌트에서 사용될 모달 open함수
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <S.Dashboard>
            <button onClick={openModal}>Open Modal</button>
            { isOpen ? 
                <Modal 
                    onClose={closeModal}
                >
                    modal 입니다.
                </Modal>
                : null }
            
            <div className="test">본문길이 늘려 스크롤 테스트</div>
            
            
            
        </S.Dashboard>
    );
}

export default Dashboard;