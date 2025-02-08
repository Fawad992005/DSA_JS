let s = ["h", "e", "l", "l", "o"];
let mystack = [];
for (let i = 0; i < s.length; i++) {
  mystack.push(s[i]);
}
console.log(mystack);
let reversedstring = "";
while (mystack.length > 0) {
  reversedstring += mystack.pop();
}
console.log(reversedstring);
