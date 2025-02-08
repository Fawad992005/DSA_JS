let mainstack = [];
let minstack = [];
let currentmin;

function push(value) {
  mainstack.push(value);
  if (minstack.length === 0 || value <= currentmin) {
    currentmin = value;
    minstack.push(value);
  }
}
function pop() {
  if (currentmin === mainstack.pop()) {
    minstack.pop();
    currentmin = minstack[minstack.length - 1];
  }
}

function findmin() {
  return currentmin;
}
push(4);
push(8);
push(3);
push(2);

console.log(findmin());
