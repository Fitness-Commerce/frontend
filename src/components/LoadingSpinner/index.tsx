import * as S from "./styled"
import spinner from "../../assets/Spinner.svg"

const LoadingSpinner = () => {
    return ( 
        <S.Wrapper>
            <img src={spinner} aria-label="loading spinner" alt="loading spinner" />
        </S.Wrapper>
     );
}

export default LoadingSpinner;