let nums = [1, 2];
function findmajorityelements(nums) {
  let answer = [];
  let mymap = new Map();
  for (let i = 0; i < nums.length; i++) {
    mymap.set(nums[i], (mymap.get(nums[i]) || 0) + 1);
  }
  let range = Math.floor(nums.length / 3);
  for (let [keys, values] of mymap) {
    if (values > range) {
      answer.push(keys);
    }
  }
  return answer;
}
console.log(findmajorityelements(nums));
