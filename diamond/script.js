// This function generates a diamond pattern using asterisk (*) characters.
// It returns null if the input is an even number or negative.

function diamond(n) {
  // Check if n is less than or equal to 0 or if it's an even number
  if (n <= 0 || n % 2 === 0) return null;

  // Initialize an empty string to build the diamond pattern
  let str = '';

  // Loop through each row of the diamond
  for (let i = 0; i < n; i++) {
    // Calculate the number of spaces needed on each side of the asterisk
    let len = Math.abs((n - 2 * i - 1) / 2);

    // Add leading spaces
    str += ' '.repeat(len);

    // Add asterisks
    str += '*'.repeat(n - 2 * len);

    // Add a newline character to move to the next row
    str += '\n';
  }

  // Return the generated diamond pattern as a string
  return str;
}
