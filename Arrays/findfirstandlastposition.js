let nums = [5, 7, 7, 8, 8, 10];
let target = 8;

function findStartingPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      result = mid; // Found target, store the index
      right = mid - 1; // Move left to find the first position
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

function findEndingPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(mid);
    if (nums[mid] === target) {
      result = mid; // Found target, store the index
      left = mid + 1; // Move right to find the last position
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

function findPositions(nums, target) {
  const start = findStartingPosition(nums, target);
  const end = findEndingPosition(nums, target);
  return [start, end];
}

console.log(findPositions(nums, target)); // Output: [3, 4]
