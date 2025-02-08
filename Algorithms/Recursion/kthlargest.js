let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;

function Kthlargestelement(nums, k) {
  nums.sort((a, b) => {
    return a - b;
  });
  console.log(nums);
  return nums[nums.length - k];
}

console.log(Kthlargestelement(nums, k));
