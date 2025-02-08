/*nemo = ["nemo"];
let everyone = [
  "nemo",
  "nemo",
  "nemo",
  "nemo",
  "nemo",
  "nemo",
  "nemo",
  "nemo",
  "nemo",
  "nemo",
];
let large = new Array(10000).fill("nemo");

function findnemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("found nemo");
      break;
    }
  }
  let t1 = performance.now();
  console.log(`Took ${t1 - t0} milliseconds`);
}

findnemo(nemo);

let map = {};
arr = ["a", "b"];
arr2 = ["x", "a", "k"];
for (let i = 0; i < arr.length; i++) {
  if (!map[arr[i]]) {
    let item = arr[i];
    map[item] = true;
  }
}

for (let j = 0; j < arr2.length; j++) {
  if (map[arr2[j]]) {
    console.log(true);
    break;
  }
}*/

function haspair(arr1, target) {
  const myset = new Set();
  const len = arr1.length;
  for (let i = 0; i < len; i++) {
    if (myset.has(arr1[i])) {
      console.log(myset);
      return true;
    }
    myset.add(target - arr1[i]);
  }
  return false;
}
let result = haspair([6, 4, 6, 8, 3, 2], 10);
console.log(result);
