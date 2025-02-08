function binarySearchMin(arr) {
  let left = 0;
  let right = arr.length - 1;

  if (arr[left] < arr[right]) {
    return arr[left];
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if mid is the minimum
    if (mid > 0 && arr[mid] < arr[mid - 1]) {
      return arr[mid];
    }
    if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) {
      return arr[mid + 1];
    }

    // Decide which side to go
    if (arr[mid] >= arr[left]) {
      left = mid + 1; // Move to the right side
    } else {
      right = mid - 1; // Move to the left side
    }
  }

  return null; // In case the array is empty
}

let array = [3, 4, 5, 0, 2];
console.log(binarySearchMin(array)); // Output: 1
