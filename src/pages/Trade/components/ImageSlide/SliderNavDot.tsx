import { NavDot } from "./styled";

interface SliderNavDotProps {
    active_dot: number;
    len: number;
}

const SliderNavDot = ({ active_dot, len }: SliderNavDotProps) => {
    return (
        <ul className="dot-navigation">
            {Array(len)
                .fill(false)
                .map((_, index) => (
                    <NavDot key={index} $isActive={index === active_dot} />
                ))}
        </ul>
    );
};

export default SliderNavDot;
