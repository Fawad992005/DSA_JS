let nums1 = [1, 2, 3, 3];
let nums2 = [1, 1, 2, 2];

function findDifference(nums1, nums2) {
  // Convert both arrays to sets to remove duplicates
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  // Find elements in nums1 that are not in nums2
  let difference1 = Array.from(set1).filter((num) => !set2.has(num));

  // Find elements in nums2 that are not in nums1
  let difference2 = Array.from(set2).filter((num) => !set1.has(num));

  // Return the two difference arrays
  return [difference1, difference2];
}

console.log(findDifference(nums1, nums2));
