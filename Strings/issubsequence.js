function isSubsequence(s, t) {
    let i = 0, j = 0;
  
    // Loop while both strings are not fully traversed
    while (i < s.length && j < t.length) {
      // If characters match, move the pointer for s
      if (s[i] === t[j]) {
        i++;
      }
      // Always move the pointer for t
      j++;
    }
  
    // If we have traversed all characters of s, it means s is a subsequence
    return i === s.length;
  }
  
  // Test examples
  console.log(isSubsequence("abc", "ahbgdc")); // true
  console.log(isSubsequence("abc", "bacd"));   // false
  