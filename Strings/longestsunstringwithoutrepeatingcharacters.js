s = "abcbacbb";
let arr = [];
let maxLength = 0;

for (let i = 0; i < s.length; i++) {
    // If the character already exists in the current substring, remove the characters before it
    while (arr.includes(s[i])) {
        arr.shift();  // Remove characters from the start until the repeated one is gone
    }
    
    arr.push(s[i]);  // Add the current character to the substring array
    
    maxLength = Math.max(maxLength,arr.length)
}

console.log(arr);  // Output: 3
