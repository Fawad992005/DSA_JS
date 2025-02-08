let nums = [1, 2, 3];
let queries = [10];
let x = 5;
function findoccurence(nums, queries, x) {
  let arr = [];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) {
      arr.push(i);
    }
  }
  for (let j = 0; j < queries.length; j++) {
    let currentindex = queries[j];
    if (arr[currentindex - 1] === undefined) {
      result.push(-1);
    } else {
      result.push(arr[currentindex - 1]);
    }
  }
  return result;
}
console.log(findoccurence(nums, queries, x));
