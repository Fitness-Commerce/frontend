
// 일정 범위 넘어가는 값의 최소, 최댓값을 설정하는 함수
const clamp = (value: number, min: number, max: number) => {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
};

export default clamp;
