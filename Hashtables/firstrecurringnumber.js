let nums = [2, 5, 5, 2, 3];

function firstrecuuringnum(nums) {
  let mymap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mymap.has(nums[i])) {
      return mymap.get(nums[i]);
    }
    mymap.set(nums[i], nums[i]);
  }
  return undefined;
}
console.log(firstrecuuringnum(nums));
