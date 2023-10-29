import { styled } from "styled-components";

interface ImageProps {
    $img_length: number;
    $width: number;
    $height: number;
}

interface SliderProps extends ImageProps {
    $slideX: number;
}

// 이미지 랩퍼
export const Image = styled.div<ImageProps>`
    position: relative;
    display: block;
    border-radius: 4px;
    flex-shrink: 0;
    box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.1);
    width: 500px;
    height: 500px;
    background-color: var(--color-bright-black);
    overflow: hidden;

    @media ${(props) => props.theme.media.laptop} {
        width: 400px;
        height: 400px;
    }
    @media ${(props) => props.theme.media.tablet} {
        width: 300px;
        height: 300px;
    }
    @media ${(props) => props.theme.media.mobile} {
        width: 150px;
        height: 150px;
    }

    .trade__img-slide {
        opacity: 0;
        position: absolute;
        top: 45%;
        display: flex;
        align-items: center;
        padding: 6px 8px;
        border: none;
        border-radius: var(--button-radius);
        box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.3);
        background-color: var(--color-accent-bright-green);
        transition: opacity 0.4s ease;
        cursor: pointer;

        /* 이미지 왼쪽 전환 버튼 */
        &.left-btn {
            left: 10px;
        }

        /* 이미지 오른쪽 전환 버튼 */
        &.right-btn {
            right: 10px;
            img {
                transform: rotate(180deg);
            }
        }
    }

    /* 이미지 도트 네비게이션 */
    .dot-navigation {
        position: absolute;
        top: 95%;
        left: 50%;
        width: ${(props) => props.$width}px;
        transform: translate(-50%, -50%);
        align-items: center;
        display: flex;
        justify-content: center;
        background: linear-gradient(
            to top,
            rgba(50, 50, 50, 0.8),
            rgba(50, 50, 50, 0)
        );
        box-shadow: none;

        list-style-type: none;
        margin: 0;
        padding: 18px 0;
    }

    // 이미지 슬라이더 컨테이너
    &:hover .trade__img-slide {
        opacity: 0.8;

        &:disabled {
            opacity: 0.3;
        }
    }
`;

// 이미지 슬라이더
// style 쓰는 이유: 정적인 값은 그냥 props로 넘겨주면 되지만 동적인 값은 style로 지정해야 된다. (아마 클래스 이름이 너무 자주 선언되서 그런듯)
export const Slider = styled.div.attrs<SliderProps>((props) => ({
    style: {
        left: props.$slideX,
    },
}))`
    position: absolute;
    display: flex;
    width: ${(props) => props.$width * props.$img_length}px;
    transition: left 0.2s ease-out;

    img {
        width: ${(props) => props.$width}px;
        height: ${(props) => props.$width}px;
        object-fit: contain;
    }
`;

interface NavDotProps {
    $isActive: boolean;
}

// 이미지 슬라이더 네비게이션 도트
export const NavDot = styled.li<NavDotProps>`
    border-radius: 9999px;
    height: 0.6rem;
    width: 0.6rem;
    margin: 0.15rem 0.25rem;
    border: 1px solid #d1d5db;
    transition: background-color 0.3s ease;

    background-color: ${(props) =>
        props.$isActive ? "#d1d5db" : "transparent"};
`;
