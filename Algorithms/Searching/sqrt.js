var mySqrt = function (x) {
  if (x < 2) return x; // Handle 0 and 1 directly

  let left = 2; // Start from 2 since we already handled 0 and 1
  let right = Math.floor(x / 2); // The square root cannot be greater than x/2 for x >= 4

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === x) {
      return mid; // Exact square root found
    } else if (square < x) {
      left = mid + 1; // Move to the right side
    } else {
      right = mid - 1; // Move to the left side
    }
  }

  return right; // The floor of the square root
};
console.log(mySqrt(8));
