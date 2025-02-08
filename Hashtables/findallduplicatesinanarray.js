let nums = [4, 3, 2, 7, 8, 2, 3, 1];

function findduplicates(nums) {
  let duplicates = [];
  let myset = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!myset.has(nums[i])) {
      myset.add(nums[i]);
    } else {
      duplicates.push(nums[i]);
    }
  }
  return duplicates;
}

console.log(findduplicates(nums));
