let nums = [2, 2, 2, 1, 1, 4, 4, 4, 1, 3];

function singlenum(nums) {
  let mymap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mymap.has(nums[i])) {
      mymap.set(nums[i], mymap.get(nums[i]) + 1); // Increment count
    } else {
      mymap.set(nums[i], 1); // Initialize count to 1
    }
  }
  for (let [key, value] of mymap) {
    if (value === 1) {
      return key;
    }
  }
}

console.log(singlenum(nums));
