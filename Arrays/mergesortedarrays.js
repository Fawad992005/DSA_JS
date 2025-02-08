let arr1 = [15, 29];
let arr2 = [4, 6, 30];
function mergesortedarrays(arr1, arr2) {
  const mergedarray = [];
  let arrayitem = arr1[0];
  let array2item = arr2[0];
  let i = 1;
  let j = 1;

  while (array2item || arrayitem) {
    if (!array2item || arrayitem < array2item) {
      mergedarray.push(arrayitem);
      arrayitem = arr1[i];
      i++;
    } else {
      mergedarray.push(array2item);
      array2item = arr2[j];
      j++;
    }
  }
  return mergedarray;
}
console.log(mergesortedarrays(arr1, arr2));
