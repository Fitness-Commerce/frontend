import { ReactNode } from "react";
import { styled } from "styled-components";


const StyledSideMarginWrapper = styled.div`
    margin: 0 5vw;
    @media (max-width: 1024px) { 
        /* 테블릿 크기에서의 스타일 */ 
        margin: 0 3vw;
    }

    @media (max-width: 768px) { 
        /* 모바일 크기에서의 스타일 */ 
        margin: 0 2vw;
    }
`;

/**
 * 양 옆에 margin: 5vw 주는 wrapper 컴포넌트
 */
const SideMarginWrapper: React.FC<SideMarginWrapperProp> = ({children}) => {
    return (
        <StyledSideMarginWrapper>
        { children }
        </StyledSideMarginWrapper>
    );
}

export default SideMarginWrapper;


interface SideMarginWrapperProp {
    children: ReactNode;
}