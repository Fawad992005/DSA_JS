let nums = [10, 2];

function largestNumber(nums) {
  // Step 1: Convert numbers to strings
  let stringArr = nums.map((num) => num.toString());
  console.log(stringArr);

  // Step 2: Sort using a custom comparator
  stringArr.sort((a, b) => {
    // Compare concatenated results
    return b + a - (a + b); // Sort in descending order
  });

  // Step 3: Join the sorted array
  let result = stringArr.join("");

  // Step 4: Handle case where the result is a series of zeros
  return result[0] === "0" ? "0" : result;
}

console.log(largestNumber(nums)); // Output: "9534330"
