function findTheDifference(s, t) {
    let charCount = new Map();
    
    // Count frequency of characters in s
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Decrease count for characters in t
    for (let char of t) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) - 1);
            if (charCount.get(char) === 0) {
                charCount.delete(char);
            }
        } else {
            // Character in t is the extra character
            return char;
        }
    }

}

// Example usage:
let s = "abcd";
let t = "abcde";
console.log(findTheDifference(s, t)); // Output: "e"
