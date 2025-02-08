let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

function mergeIntevals(intervals) {
  let result = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let nextInterval = intervals[i];

    if (nextInterval[0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
    } else {
      result.push(currentInterval);
      currentInterval = nextInterval;
    }
  }

  // Step 3: Push the last interval
  result.push(currentInterval);

  return result;
}

console.log(mergeIntevals(intervals));
