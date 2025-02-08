let digits = [9, 9, 9, 9];

function plusone(digits) {
  let lastIndex = digits.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0; // Change the current 9 to 0
    } else {
      digits[i]++; // Increment the first non-9 digit
      return digits; // Return the result after incrementing
    }
  }

  // If all digits are 9 (e.g., [9, 9, 9]), we need to add 1 at the beginning
  digits.unshift(1);
  return digits;
}

console.log(plusone(digits)); // Output: [2, 0, 0]
