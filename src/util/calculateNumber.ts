function calculateNumber() {
    let count = 0;
    return {
        increase: () => count++,
        decrease: () => count--,
        getCount: () => count,
        reset: () => {
            count = 0;
        },
    };
}

export default calculateNumber;
