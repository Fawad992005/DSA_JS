let nums = [1, 1, 1, 2, 2, 3];
let k = 2;

function findfrequentelements(nums, k) {
  let mymap = new Map();

  // Build frequency map
  for (let i = 0; i < nums.length; i++) {
    mymap.set(nums[i], (mymap.get(nums[i]) || 0) + 1);
  }

  // Convert map to array and sort by frequency (value)
  let sortedArray = Array.from(mymap).sort((a, b) => b[1] - a[1]);
  console.log(sortedArray);
  // Get the top k elements (just the keys)
  return sortedArray.slice(0, k).map((item) => item[0]);
}

console.log(findfrequentelements(nums, k)); // Output: [1, 2]
