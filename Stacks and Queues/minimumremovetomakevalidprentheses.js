let s = "a)bc(d)(";

function removeminimum(s) {
  let stack = [];
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length === 0) {
        s[i] = "";
      } else {
        stack.pop();
      }
    }
  }
  while (stack.length > 0) {
    let index = stack.pop();
    s[index] = "";
  }
  return s.join("");
}
console.log(removeminimum(s));
