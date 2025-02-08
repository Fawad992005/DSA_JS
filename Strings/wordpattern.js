function wordPattern(pattern, s) {
    let words = s.split(" "); // Split the string into words
    if (pattern.length !== words.length) {
        return false; // The number of pattern characters and words should be the same
    }

    let charToWordMap = new Map; // Map for pattern -> word
    let wordToCharMap = new Map; // Map for word -> pattern

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];

        
        if (charToWordMap.has(char)) {
            if (charToWordMap.get(char) !== word) {
                return false; 
            }
        } else {
            charToWordMap.set(char,word)
        }

        
        if (wordToCharMap.has(word)) {
            if (wordToCharMap.get(word) !== char) {
                return false; 
            }
        } else {
            wordToCharMap.set(word,char)
        }
    }
    return true; 
}

let pattern = "abba";
let s = "dog constructor constructor dog";
console.log(wordPattern(pattern, s)); 
