let nums = [1, 2, 3, 1];

function houserobber(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev1 = 0;
  let prev2 = 0;

  for (let num of nums) {
    let temp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = temp;
  }

  return prev1;
}

console.log(houserobber(nums)); // Output: 4
