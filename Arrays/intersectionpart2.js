function findIntersection(nums1, nums2) {
  let map1 = new Map();
  let map2 = new Map();
  let answer = [];

  // For nums1
  for (let i = 0; i < nums1.length; i++) {
    map1.set(nums1[i], (map1.get(nums1[i]) || 0) + 1);
  }

  // For nums2
  for (let j = 0; j < nums2.length; j++) {
    map2.set(nums2[j], (map2.get(nums2[j]) || 0) + 1);
  }

  for (let [key, count1] of map1) {
    if (map2.has(key)) {
      let count2 = map2.get(key);
      let minCount = Math.min(count1, count2);

      for (let k = 0; k < minCount; k++) {
        answer.push(key);
      }
    }
  }

  return answer;
}

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];

console.log(findIntersection(nums1, nums2));
