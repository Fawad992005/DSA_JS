function reversestring(str) {
  let reversestring = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversestring.push(str[i]);
  }
  return reversestring.join("");
}

let str = "Hi! My nme is fawad";
console.log(reversestring(str));
