import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Nav = styled.nav`
    .nav-wrapper {
        position: relative;
        display: flex;
        width: 100%;
        height: 60px;
        gap: 16px;
        align-items: center;
        
        .nav-wrapper__category-btn {
            position: relative;
            background-color: transparent;
            border: none;
            padding: 0;
            display: flex;
            align-items: center;
            font-size: 16px;

            &:hover {
                &::before {
                    content: "";
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    height: 60px;
                    width: 100%;
                    &:hover ~ .category__nav-wrapper {
                        display: grid;
                    }
                }
            }
            &:hover ~ .category__nav-wrapper {
                display: grid;
            }
            
            .nav-wrapper__category-btn__text {
                margin-left: 5px;
            }
        }

        /* 카테고리 */
        .category__nav-wrapper {
            display: grid;
            grid-template-columns: repeat(5, 1fr); /* 가로 5개의 열 생성 */
            gap: 10px; /* 그리드 아이템 사이의 간격 설정 */
            display: none;
            position: absolute;
            width: 100%;
            height: max-content;
            top: 60px;
            left: 0px;
            z-index: 999;
            background-color: var(--color-bg-white);
            color: black;
            border-radius: 4px;
            &:hover {
                display: grid;
            }
        }

        /* 카테고리,전체 매물, 커뮤니티 공통 */
        .nav-wrapper__category-btn, a {
            transition: all 0.3s ease-in-out;
            &:hover {
                /* 호버 시 텍스트를 위로 올리는 효과 */
                transform: translateY(-5px);
            }
        }
    }
`;

export const Link = styled(NavLink)`
    flex: 0, 0, 0%;
    &.active {
        text-decoration: underline;
        text-underline-offset: 5px;
    }
`