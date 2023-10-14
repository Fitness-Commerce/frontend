import { useState, useRef, useEffect } from "react";

import SliderNavDot from "./SliderNavDot";

import clamp from "../../../../util/clamp";
import { width, heigth } from "../../../../contance/tradeImgLength.json";
import guide_arrow from "../../../../assets/guide_arrow.svg";
import theme from "../../../../style/theme";
import * as S from "./styled";

// FIXME: 더미데이터
import dummyProductImg from "../../../../assets/product1.webp";

interface ImageSlideProps {
    itemImagesUrl: string[];
}

// 매물 이미지 슬라이드
const ImageSlide = ({ itemImagesUrl }: ImageSlideProps) => {
    const [imageMediaLength, setImageMediaLength] = useState(
        window.innerWidth >= theme.size.laptop
            ? 500
            : window.innerWidth >= theme.size.tablet
            ? 400
            : window.innerWidth >= theme.size.mobile
            ? 300
            : 150
    );
    const [sliderX, setSliderX] = useState(0);
    const [navDotIndex, setNavDotIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handlePrevClick = () => {
        setSliderX((old) =>
            clamp(
                old + imageMediaLength,
                -(itemImagesUrl.length - 1) * imageMediaLength,
                0
            )
        );
        setNavDotIndex((idx) => idx - 1);
    };
    const handleNextClick = () => {
        setSliderX((old) =>
            clamp(
                old - imageMediaLength,
                -(itemImagesUrl.length - 1) * imageMediaLength,
                0
            )
        );
        setNavDotIndex((idx) => idx + 1);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= theme.size.laptop) {
                setImageMediaLength(500);
            } else if (window.innerWidth >= theme.size.tablet) {
                setImageMediaLength(400);
            } else if (window.innerWidth >= theme.size.mobile) {
                setImageMediaLength(300);
            } else {
                setImageMediaLength(150);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <S.Image
            $img_length={itemImagesUrl.length}
            $width={width}
            $height={heigth}
            ref={sliderRef}
        >
            <S.Slider
                $slideX={sliderX}
                $img_length={itemImagesUrl.length}
                $width={imageMediaLength}
                $height={imageMediaLength}
            >
                {itemImagesUrl.map((url, index) => (
                    <img
                        key={self.crypto.randomUUID()}
                        src={url || dummyProductImg}
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
                disabled={sliderX === -(itemImagesUrl.length - 1) * imageMediaLength}
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
