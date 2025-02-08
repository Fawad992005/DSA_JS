class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Queues {
  constructor() {
    (this.first = null), (this.last = null), (this.length = 0);
  }

  peek() {
    return this.first;
  }
  enqueue(value) {
    let newnode = new Node(value);
    if (this.length === 0) {
      this.first = newnode;
      this.last = newnode;
    } else {
      let prev = this.last;
      this.last = newnode;
      prev.next = this.last;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

let myqueue = new Queues();
myqueue.enqueue(1);
myqueue.enqueue(2);
myqueue.enqueue(3);
console.log(myqueue.dequeue());
