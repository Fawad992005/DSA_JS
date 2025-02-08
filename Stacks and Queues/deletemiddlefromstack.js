let stack1 = [1, 2, 3, 4, 5];
let stack2 = [];

let midindex = Math.floor(stack1.length / 2);
let currentindex = 0;
while (stack1.length > 0) {
  let last = stack1.pop();
  if (currentindex === midindex) {
    currentindex++;
    continue;
  }
  stack2.push(last);
  currentindex++;
}
console.log("stack1:", stack1); // Should be empty
console.log("stack2:", stack2.reverse());
