const Calculate = {
    factorial(inputNumber) {
        if (inputNumber < 0 || inputNumber === 1) {
            return 1;
        }
        let totalSum = 1;
        for (let i = 1; i <= inputNumber; i++) {
            totalSum *= i;
        }
        return totalSum;
    },
};

export default Calculate;
