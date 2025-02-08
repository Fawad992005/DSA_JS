function dailyTemperatures(temperatures) {
  const n = temperatures.length;
  const answer = new Array(n).fill(0); // Initialize the answer array with zeros
  const stack = []; // Stack to keep track of indices

  for (let i = 0; i < n; i++) {
    // While stack is not empty and current temperature is greater than the temperature at the index on top of the stack
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const idx = stack.pop(); // Pop the index
      answer[idx] = i - idx; // Calculate the days to wait
    }
    stack.push(i); // Push the current index onto the stack
  }

  return answer;
}

// Example usage:
const temperatures2 = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures2)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
