# Odd Occurrence Finder

This JavaScript function helps you find the integer that appears an odd number of times in an array of integers. It is designed to work with arrays where there is always only one integer that meets this condition.

## Examples

- For the input `[7]`, the function returns `7` because it occurs 1 time (which is odd).
- For the input `[0]`, the function returns `0` because it occurs 1 time (which is odd).
- For the input `[1, 1, 2]`, the function returns `2` because it occurs 1 time (which is odd).
- For the input `[0, 1, 0, 1, 0]`, the function returns `0` because it occurs 3 times (which is odd).
- For the input `[1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]`, the function returns `4` because it appears 1 time (which is odd).

## How It Works

This function efficiently uses a XOR operation to find the element that appears an odd number of times in the array. It works by canceling out pairs of elements, leaving the odd-occurring element as the result.

## Usage

To use the `findOdd` function in your JavaScript code, you can simply copy the code from the example provided earlier in this document. It's a reusable function that can be integrated into your own projects to solve similar problems.

```javascript
function findOdd(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }
  return result;
}
