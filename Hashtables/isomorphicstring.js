let s = "foo";
let t = "bar";

function isomorphicstring(s, t) {
  let mymap = new Map();
  let mymap2 = new Map();
  for (let i = 0; i < s.length; i++) {
    charS = s[i];
    charT = t[i];
    if (mymap.has(charS)) {
      if (mymap.get(charS) !== charT) {
        return false;
      }
    } else {
      mymap.set(charS, charT);
    }

    if (mymap2.has(charT)) {
      if (mymap2.get(charT) !== charS) {
        return false;
      }
    } else {
      mymap2.set(charT, charS);
    }
  }
  return true;
}

console.log(isomorphicstring(s, t));
