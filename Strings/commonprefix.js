const longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    // Find the shortest string in the array
    let shortestStr = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortestStr.length) {
            shortestStr = strs[i];
        }
    }

    for(let j=0;j<shortestStr.length;j++){
        for(let k=0;k<strs.length;k++){
            if(strs[k][j]!==shortestStr[j]){
                return (shortestStr.slice(0,j))
            }
        }
    }
    return shortestStr;  // Return the entire shortest string if no mismatch
};

// Example usage
const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); // Output: "fl"