import { styled } from "styled-components";

export const Banner = styled.div`
    /* background-color: transparent; */
    background-color: var(--color-gray);
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    padding: 0 10rem;
    white-space: nowrap;
    .banner-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        line-height: 60px;
        .line1 { font-size: 30px; }
        .line2 { font-size: 40px; }
        .line3 { font-size: 35px; }
        span {
            font-weight: bold;
        }
    }
    .banner-right {
        display: flex;
        .banner-right__man {
            width: 25vh;
        }
    }
    @media (max-width: 1024px) { 
	    /* 테블릿 크기에서의 스타일 */  
        .banner-left {
            line-height: 55px;
            .line1 { font-size: 25px; }
            .line2 { font-size: 35px; }
            .line3 { font-size: 30px; }
        }
    }
    @media (max-width: 900px) { 
	    /* 테블릿 크기에서의 스타일 */  
        padding: 0 5rem;
        .banner-left {
            .line1 { font-size: 25px; }
            .line2 { font-size: 35px; }
            .line3 { font-size: 30px; }
        }
    }
    @media (max-width: 768px) { 
        /* 모바일 크기에서의 스타일 */ 
        padding: 0 2rem;
        .banner-left {
            line-height: 40px;
            .line1 { font-size: 15px; }
            .line2 { font-size: 25px; }
            .line3 { font-size: 20px; }
        }
        .banner-right {
            .banner-right__man {
                width: 20vh;
            }
        }
    }
    @media (max-width: 500px) { 
        /* 모바일 크기에서의 스타일 */ 
        .banner-left {
            line-height: 30px;
            .line1 { font-size: 12px; }
            .line2 { font-size: 18px; }
            .line3 { font-size: 14px; }
        }
        .banner-right {
            .banner-right__man {
                width: 10vh;
            }
        }
    }
`;