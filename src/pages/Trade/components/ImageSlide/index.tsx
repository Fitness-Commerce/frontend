import { useState, useRef } from "react";

import SliderNavDot from "./SliderNavDot";

import clamp from "../../../../util/clamp";
import { width, heigth } from "../../../../contance/tradeImgLength.json";
import guide_arrow from "../../../../assets/guide_arrow.svg";
import * as S from "./styled";

// FIXME: 더미데이터
import dummyProductImg from "../../../../assets/product1.webp";

interface ImageSlideProps {
    itemImagesUrl: URL[];
}

// 매물 이미지 슬라이드
const ImageSlide = ({ itemImagesUrl }: ImageSlideProps) => {
    const [sliderX, setSliderX] = useState(0);
    const [navDotIndex, setNavDotIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    
    // TODO: 마우스 드래그로 슬라이드 구현 (최적화 필요)
    // 1. 이미지 프레임에 맞춰서 멈춰야됨
    // 2. 마우스가 움직일 때마다 sliderX가 변하기 때문에 재렌더링 너무 많음
    // 3. 네비 도트 상태값을 드래그에 맞춰 변환시켜줘야됨

    // const startRef = useRef<number | null>(0);

    // function handleMouseMove(
    //     event: React.MouseEvent<HTMLDivElement, MouseEvent>
    // ) {
    //     if (sliderRef.current && startRef.current !== null) {
    //         const currentX = event.pageX;
    //         const deltaX = startRef.current - currentX;
    //         startRef.current = currentX;
    //         setSliderX((old) =>
    //             clamp(old - deltaX, -(itemImagesUrl.length - 1) * width, 0)
    //         );
    //     }
    // }

    // function handleMouseDown(
    //     event: React.MouseEvent<HTMLDivElement, MouseEvent>
    // ) {
    //     event.preventDefault();
    //     startRef.current = event.pageX;
    // }

    // function handleMouseUp() {
    //     startRef.current = null;
    // }

    const handlePrevClick = () => {
        setSliderX((old) =>
            clamp(old + width, -(itemImagesUrl.length - 1) * width, 0)
        );
        setNavDotIndex((idx) => idx - 1);
    };
    const handleNextClick = () => {
        setSliderX((old) =>
            clamp(old - width, -(itemImagesUrl.length - 1) * width, 0)
        );
        setNavDotIndex((idx) => idx + 1);
    };

    return (
        <S.Image
            $img_length={itemImagesUrl.length}
            $width={width}
            $height={heigth}
            // onMouseMove={handleMouseMove}
            // onMouseUp={handleMouseUp}
            // onMouseLeave={handleMouseUp}
            // onMouseDown={handleMouseDown}
            ref={sliderRef}
        >
            <S.Slider
                $slideX={sliderX}
                $img_length={itemImagesUrl.length}
                $width={width}
                $height={heigth}
            >
                {itemImagesUrl.map((url, index) => (
                    <img
                        key={self.crypto.randomUUID()}
                        src={url.toString() || dummyProductImg}
                        alt={`image ${index}`}
                    />
                ))}
            </S.Slider>
            <button
                className="trade__img-slide left-btn"
                type="button"
                onClick={handlePrevClick}
                disabled={sliderX === 0}
            >
                <img
                    src={guide_arrow}
                    aria-label="left arrow"
                    alt="left arrow"
                />
            </button>
            <button
                className="trade__img-slide right-btn"
                type="button"
                onClick={handleNextClick}
                disabled={sliderX === -(itemImagesUrl.length - 1) * width}
            >
                <img
                    src={guide_arrow}
                    aria-label="right arrow"
                    alt="right arrow"
                />
            </button>
            <SliderNavDot active_dot={navDotIndex} len={itemImagesUrl.length} />
        </S.Image>
    );
};

export default ImageSlide;
