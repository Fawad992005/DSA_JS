let arr = [7, 5, 6, 9, 3, 10, 1, 2, 0];

function selectionsort(arr) {
  for (let j = 0; j < arr.length; j++) {
    let min = j;
    let temp = arr[j];
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[i] < arr[min]) {
        min = i;
      }
    }
    arr[j] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectionsort(arr));

// Time Complexity O(n^2)
