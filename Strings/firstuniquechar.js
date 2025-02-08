function firstUniqueChar(s) {
    let charcount = new Map();

    for(let char of s){
        charcount.set(char,(charcount.get(char)||0)+1)
    }
    for(let i=0;i<s.length;i++){
        if(charcount.get(s[i])===1){
            return i
        }
    }
    return -1;
}

let s = "aabb";
let result = firstUniqueChar(s);
console.log(result); // Output should be the index of the first unique character
