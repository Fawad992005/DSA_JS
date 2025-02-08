nums = [3, 2, 4];
target = 6;

function twosum(nums, target) {
  let myMap = new Map();
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (myMap.has(complement)) {
      answer.push(myMap.get(complement));
      answer.push(i);
      return answer;
    }

    myMap.set(nums[i], i);
  }
  return false;
}

console.log(twosum(nums, target));
