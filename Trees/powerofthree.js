let n = 3;
function powerofthree(n) {
  if (n < 0 || n === 0) {
    return false;
  }
  let currentvalue = n;
  while (currentvalue > 1) {
    if (currentvalue % 3 !== 0) {
      return false;
    }
    currentvalue = currentvalue / 3;
  }
  return currentvalue === 1;
}

console.log(powerofthree(n));
