import { useNavigate } from "react-router-dom";

import * as S from "./styled";
import alert from "../../assets/alert.svg"

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <S.Wrapper>
            <img src={alert} aria-label="alert" alt="alert" width={132 * 1.5} height={98 * 1.5} />
            <h1 className="error-title">
                404 ERROR
                <span className="error-content-en">Page not found</span>
            </h1>
            <div className="error__btn-container">
                <button type="button" className="error__home-btn">
                    <span onClick={() => navigate("/")}>HOME</span>
                </button>
                <button type="button" className="error__previouspage-btn">
                    <span onClick={() => navigate(-1)}>뒤로가기</span>
                </button>
            </div>
        </S.Wrapper>
    );
};

export default ErrorPage;
