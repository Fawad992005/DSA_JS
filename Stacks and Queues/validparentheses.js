// Another solution would be Store the values of brackets in map or obect and then check if the removed element equals to that and if not return false

let string = "(){}";
let mystack = [];

function validparentheses(string, mystack) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
      mystack.push(string[i]);
    }
    if (string[i] === ")") {
      if (mystack[mystack.length - 1] === "(") {
        mystack.pop();
      } else {
        return false;
      }
    }
    if (string[i] === "}") {
      if (mystack[mystack.length - 1] === "{") {
        mystack.pop();
      } else {
        return false;
      }
    }
    if (string[i] === "]") {
      if (mystack[mystack.length - 1] === "[") {
        mystack.pop();
      } else {
        return false;
      }
    }
  }

  if (mystack.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(validparentheses(string, mystack));
