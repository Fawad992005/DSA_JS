function containsDuplicate(nums, k) {
  let hasMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hasMap.has(nums[i])) {
      let prevIndex = hasMap.get(nums[i]);
      if (Math.abs(i - prevIndex) <= k) {
        return true;
      }
    }
    hasMap.set(nums[i], i);
  }
  return false;
}

let nums = [1, 2, 3, 1];
let k = 3;
console.log(containsDuplicate(nums, k)); // Output: true
