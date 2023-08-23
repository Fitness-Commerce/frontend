import { styled } from "styled-components";

export const Banner = styled.div`
    /* background-color: transparent; */
    background-color: var(--color-gray);
    width: 100%;
    height: 25vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    .banner-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        line-height: 60px;
        margin-right: 10rem;
        .line1 { font-size: 30px; }
        .line2 { font-size: 40px; }
        .line3 { font-size: 35px; }
        span {
            font-weight: bold;
        }
    }
    .banner-right {
        .banner-right__man {
            height: 25vh;
        }
    }
`;