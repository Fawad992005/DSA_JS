const numbers = [99, 7, 5, 19, 87, 45, 63, 2, 1, 283];

// Time Complexity O(n log N)

function mergesort(numbers) {
  if (numbers.length === 1) {
    return numbers;
  }
  // Split array into left and right
  // divide and conquer
  const length = numbers.length;
  const middle = Math.floor(length / 2);
  const left = numbers.slice(0, middle);
  const right = numbers.slice(middle);
  console.log(left);
  console.log(right);
  return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
  const result = [];
  let leftindex = 0;
  let rightindex = 0;
  while (leftindex < left.length && rightindex < right.length) {
    console.log(result);
    if (left[leftindex] < right[rightindex]) {
      result.push(left[leftindex]);
      leftindex++;
    } else {
      result.push(right[rightindex]);
      rightindex++;
    }
  }
  return result.concat(left.slice(leftindex)).concat(right.slice(rightindex));
}

console.log(mergesort(numbers));
