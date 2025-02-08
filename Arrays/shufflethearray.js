let nums = [2, 5, 1, 3, 4, 7];
let n = 3;
let obj = {};

// Populate the object
for (let i = 0; i < n; i++) {
  obj[`x${i}`] = nums[i];
}
for (let i = nums.length - n; i < nums.length; i++) {
  obj[`y${i - nums.length + n}`] = nums[i];
}

// Display the object with interleaved keys
let result = [];
for (let i = 0; i < n; i++) {
  if (obj[`x${i}`] !== undefined) result.push(`${obj[`x${i}`]}`);
  if (obj[`y${i}`] !== undefined) result.push(`${obj[`y${i}`]}`);
}

console.log(result);
