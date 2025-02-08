function findIntersection(num1, num2) {
  let answer = [];
  let setNum2 = new Set(num2); // Convert num2 to a Set for faster lookup

  for (let i = 0; i < num1.length; i++) {
    if (setNum2.has(num1[i]) && !answer.includes(num1[i])) {
      answer.push(num1[i]); // Add only if it's not already in the answer
    }
  }

  return answer;
}

// Example usage:
let num1 = [1];
let num2 = [2, 3, 4];
console.log(findIntersection(num1, num2)); // Output: [2, 3]
