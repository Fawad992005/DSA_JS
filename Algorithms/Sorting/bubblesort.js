let arr = [
  6, 1, 9, 8, 4, 10, 6, 4, 2, 8, 7, 2, 5, 20, 18, 30, 31, 12, 25, 16, 18, 29,
  25,
];

function bubblesort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubblesort(arr));
// Time Complexity O(n^2)
