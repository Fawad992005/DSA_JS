function merge(nums1, nums2) {
  let mergedMap = new Map();

  // Traverse the first array and store values in the map
  for (let [key, value] of nums1) {
    mergedMap.set(key, (mergedMap.get(key) || 0) + value);
  }

  // Traverse the second array and add values to the map
  for (let [key, value] of nums2) {
    mergedMap.set(key, (mergedMap.get(key) || 0) + value);
  }

  // Convert the map back to a sorted array of arrays
  let mergedArray = Array.from(mergedMap).sort((a, b) => a[0] - b[0]);

  return mergedArray;
}

let nums1 = [
  [1, 2],
  [2, 3],
  [4, 5],
];
let nums2 = [
  [1, 4],
  [3, 2],
  [4, 1],
];

console.log(merge(nums1, nums2));
