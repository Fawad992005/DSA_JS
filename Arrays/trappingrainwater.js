let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function getrainwater(height) {
  let total = 0;
  let maxL = 0;
  let right = height.length - 1;
  let maxR = 0;
  let left = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxL) {
        maxL = height[left];
      } else {
        total += maxL - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxR) {
        maxR = height[right];
      } else {
        total += maxR - height[right];
      }
      right--;
    }
  }
  return total;
}
console.log(getrainwater(height));
