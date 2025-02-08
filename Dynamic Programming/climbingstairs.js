function climbStairs(n) {
  // Base cases
  if (n === 0 || n === 1) {
    return 1;
  }

  // Initialize the first two steps
  let first = 1; // ways to climb 0 steps
  let second = 1; // ways to climb 1 step

  // Calculate the number of ways for each step from 2 to n
  for (let i = 2; i <= n; i++) {
    let current = first + second;
    first = second;
    second = current;
  }

  return second;
}

function recursive(n) {
  if (n <= 1) {
    return 1;
  }
  if (n <= 2) {
    return 2;
  }

  return recursive(n - 1) + recursive(n - 2);
}

// Example usage
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));
console.log(recursive(5));
