class Stack {
  constructor() {
    this.list = [];
  }
  peek() {
    return this.list[this.list.length - 1];
  }
  push(value) {
    this.list.push(value);
    return this;
  }
  pop() {
    this.list.pop();
    return this;
  }
}

let mystack = new Stack();
mystack.push(4);
mystack.push(2);
console.log(mystack);
