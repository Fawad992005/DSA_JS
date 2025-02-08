function replaceWords(dictionary, sentence) {
  // Sort the dictionary to prioritize shorter roots
  dictionary.sort((a, b) => a.length - b.length);

  // Split the sentence into words
  const words = sentence.split(" ");

  // Replace words with their roots
  const replacedWords = words.map((word) => {
    for (let root of dictionary) {
      if (word.startsWith(root)) {
        return root; // Replace with the shortest root
      }
    }
    return word; // No replacement
  });

  // Join the words back into a sentence
  return replacedWords.join(" ");
}

let sentence = "the cattle was rattled by the battery";
let dictionary = ["catt", "cat", "bat", "rat"];

console.log(replaceWords(dictionary, sentence)); // Output: "the cat was rat by the bat"
