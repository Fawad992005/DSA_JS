let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function checkAnagrams(strs) {
  let mymap = new Map();
  let finalresult = [];
  for (let word of strs) {
    // Sort the word to use as the key
    let sortedWord = word.split("").sort().join("");

    // If the key already exists, push the word into its group
    if (mymap.has(sortedWord)) {
      mymap.get(sortedWord).push(word);
    } else {
      // Otherwise, create a new entry
      mymap.set(sortedWord, [word]);
    }
  }
  for (let [keys, values] of mymap) {
    finalresult.push(values);
  }
  return finalresult;
}

console.log(checkAnagrams(strs));
