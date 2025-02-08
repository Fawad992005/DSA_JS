let words = ["a", "b", "c", "ab", "ac", "bc", "abc"];
let allowed = "abc";

// Create a set of allowed characters
let allowedSet = new Set(allowed);
console.log(allowedSet)
let count = 0;
for (let i = 0; i < words.length; i++) {
  let valid = true;
  for (let j = 0; j < words[i].length; j++) {
    if (!allowedSet.has(words[i][j])) {
      valid = false;
      break;
    }
  }
  if (valid) {
    count++;
  }
}

console.log(count);
