let n = 10;

function countPrimes(n) {
  let result = [];

  for (let i = 2; i < n; i++) {
    let isPrime = true;
    let range = Math.floor(Math.sqrt(i));

    for (let j = 2; j <= range; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      result.push(i);
    }
  }

  return result;
}

console.log(countPrimes(n));
