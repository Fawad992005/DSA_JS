function addTo80(n) {
  return n + 80;
}
addTo80(5);

function MemoizedaddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("First time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
let memoized = MemoizedaddTo80();
console.log(memoized(6));
console.log(memoized(7));
console.log(memoized(6));
console.log(memoized(6));
console.log(memoized(6));
