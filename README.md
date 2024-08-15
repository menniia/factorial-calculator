# Factorial Calculator

This is a simple Node.js project that provides a function to calculate the factorial of a given number. It includes basic functionality and tests to ensure the correctness of the factorial calculation.

## Project Structure

- `index.js`: Contains the `Calculate` object with the `factorial` method.
- `index_test.js`: Contains tests for the `factorial` method using the Node.js `assert` module.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/menniia/factorial-calculator.git
   ```

2. Navigate into the project directory:

   ```bash
   cd factorial-calculator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the tests:

   ```bash
   npm test
   ```

## Functionality

### `Calculate.factorial(inputNumber)`

- **Description**: Computes the factorial of the given non-negative integer `inputNumber`.
- **Parameters**:
  - `inputNumber` (number): The number for which to compute the factorial.
- **Returns**: The factorial of the input number.

### Test Cases

The tests ensure that the `factorial` function works correctly for various inputs, including edge cases like 0.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```
