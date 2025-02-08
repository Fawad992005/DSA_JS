let a = 2;
let b = 3;

function sumoftwointegers(a, b) {
  while (b !== 0) {
    let carry = (a & b) << 1;

    a = a ^ b;

    b = carry;
  }
  return a;
}

console.log(sumoftwointegers(a, b));
