let magazine = "bbbba";
let ransomnote = "bb";

function checkransomnote(magazine, ransomnote) {
  let mymap = new Map();
  for (let i = 0; i < magazine.length; i++) {
    mymap.set(magazine[i], (mymap.get(magazine[i]) || 0) + 1);
  }
  console.log(mymap);
  for (let j = 0; j < ransomnote.length; j++) {
    if (!mymap.has(ransomnote[j]) || mymap.get(ransomnote[j]) === 0) {
      return false;
    }
    mymap.set(ransomnote[j], mymap.get(ransomnote[j]) - 1);
  }
  return true;
}
console.log(checkransomnote(magazine, ransomnote));
