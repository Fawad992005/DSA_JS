let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

function rotatearray(arr, k) {
  let realK = k % arr.length;
  let rotated = arr.splice(arr.length - realK, realK);
  arr.unshift(...rotated);

  return arr;
}

console.log(rotatearray(arr, k)); // Output: [5, 6, 7, 1, 2, 3, 4]

/*nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;
function rotate(nums, k) {
  let n = nums.length;
  k = k % n; // In case k is greater than the length of the array
  console.log(k);

  for (let i = 0; i < k; i++) {
    let lastElement = nums.pop(); // Remove the last element
    nums.unshift(lastElement); // Insert it at the beginning
  }
  return nums;
}
console.log(rotate(nums, k));*/
