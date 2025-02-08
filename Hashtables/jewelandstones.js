let jewel = "z";
let Stones = "ZZ";

function checkjewelsandstones(jewel, Stones) {
  let count = 0;
  let myjewelsset = new Set(jewel);
  for (let i = 0; i < Stones.length; i++) {
    if (myjewelsset.has(Stones[i])) {
      count++;
    }
  }
  return count;
}
console.log(checkjewelsandstones(jewel, Stones));
