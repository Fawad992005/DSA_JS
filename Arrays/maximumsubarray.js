nums = [5, 4, -1, 7, 8];
function maxsubarray(nums) {
  let res = nums[0];
  let total = 0;
  for (let n of nums) {
    if (total < 0) {
      total = 0;
    }
    total += n;
    res = Math.max(res, total);
  }
  return res;
}
function maxsubarray2(nums) {
  let res = nums[0];
  let total = 0;
  for (let n of nums) {
    if (total < 0) {
      total = 0;
    }
    total += n;
    res = Math.max(res, total);
  }
  return res;
}

console.log(maxsubarray2(nums));
