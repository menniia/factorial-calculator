import assert from "assert";
import Calculate from ".";

describe("Calculate", () => {
    describe(".factorial", () => {
        it("will test if the output of 5! is 120", () => {
            // setup
            const inputNumber = 5;
            const expected = 120;

            // exercise
            const result = Calculate.factorial(inputNumber);

            // verify
            assert.strictEqual(result, expected);
        });
        it("will test if the factorial of 6 is 720", () => {
            // setup
            const inputNumber = 6;
            const expectedResult = 720;

            // exercise
            const result = Calculate.factorial(inputNumber);

            // verify
            assert.strictEqual(result, expectedResult);
        });
        it("will return 1 for a factorial of 0", () => {
            // setup
            const inputNumber = 0;
            const expectedResult = 1;

            // exercise
            const result = Calculate.factorial(inputNumber);

            // verify
            assert.strictEqual(result, expectedResult);
        })
    });
});
