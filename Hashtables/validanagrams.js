let s = "rat";
let t = "car";

function validanagram(s, t) {
  if (s.length !== t.length) return false;
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map1.has(s[i])) {
      map1.set(s[i], map1.get(s[i]) + 1);
    } else {
      map1.set(s[i], 1);
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (map2.has(t[j])) {
      map2.set(t[j], map2.get(t[j]) + 1);
    } else {
      map2.set(t[j], 1);
    }
  }
  console.log(map1);
  console.log(map2);
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    if (map2.has(key)) {
      if (map2.get(key) !== value) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

console.log(validanagram(s, t));
