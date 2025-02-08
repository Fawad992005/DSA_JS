let height = [7, 1, 2, 3, 9];

const maxArea = function (height) {
  let maxarea = 0;
  let lastindex = height.length - 1;
  let i = 0;
  while (i < lastindex) {
    let height1 = Math.min(height[i], height[lastindex]);
    let width = lastindex - i;
    let area = height1 * width;
    maxarea = Math.max(maxarea, area);
    if (height[i] <= height[lastindex]) {
      i++;
    } else {
      lastindex--;
    }
  }
  return maxarea;
};
console.log(maxArea(height));
