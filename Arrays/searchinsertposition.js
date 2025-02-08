let nums = [1, 3, 5, 6];
let target = 5;

function searchtarget(nums, target) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    if (target > nums[i]) {
      index++;
    }
  }
  return index;
}

console.log(searchtarget(nums, target));
