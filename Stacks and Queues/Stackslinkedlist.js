class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Stack {
  constructor() {
    (this.top = null), (this.bottom = null), (this.length = 0);
  }
  peek() {
    return this.top;
  }
  push(value) {
    let newnode = new Node(value);
    let prev = this.top;
    this.top = newnode;
    if (this.length === 0) {
      this.bottom = newnode;
    } else {
      this.top.next = prev;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

let mystack = new Stack();
mystack.push(1);
mystack.push(2);
mystack.push(3);
mystack.pop();
console.log(mystack.push(6));
