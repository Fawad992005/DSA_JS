let words = ["$easy$", "$problem$"];
separator = "$";
let result = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i].split(separator);
  for (let j = 0; j < word.length; j++) {
    result.push(word[j]);
  }
}
console.log(result.filter(e=>e.length));
