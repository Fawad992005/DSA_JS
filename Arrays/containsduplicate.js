let nums = [1, 2, 3, 1];

function containduplicate(nums) {
  let mymap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mymap.has(nums[i])) {
      // Duplicate found
      return true;
    } else {
      // Add the number to the map
      mymap.set(nums[i], true);
    }
  }
  // No duplicates found
  return false;
}

console.log(containduplicate(nums)); // Output: false
