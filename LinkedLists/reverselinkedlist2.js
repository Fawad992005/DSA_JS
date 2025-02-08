// Find middle of linkedlist _slow and fast pointer)
// Detect cycle in linked list (slow and fast pointer)
// Remove Nth node from the end of the list

class Linkedlist {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newnode = {
      value: value,
      next: null,
    };
    this.tail.next = newnode;
    this.tail = newnode;
    this.length++;
  }
  prepend(value) {
    let newnode2 = {
      value: value,
      next: this.head,
    };
    this.head = newnode2;
    this.length++;
  }
  printlist() {
    let array = [];
    let currentnode = this.head;
    while (currentnode !== null) {
      array.push(currentnode.value);
      currentnode = currentnode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index === this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }
    let newnode = {
      value: value,
      next: null,
    };
    let currentnode = this.head;
    let previousnode = null;
    let currindex = 0;

    while (currindex !== index) {
      previousnode = currentnode; // The node before the insertion point
      currentnode = currentnode.next; // The node at the insertion point
      currindex++;
    }

    // Insert the new node
    previousnode.next = newnode; // Link the previous node to the new node
    newnode.next = currentnode; // Link the new node to the current node at the index

    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }

    // Special case: Removing the head (first node)
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let currentnode = this.head;
    let previousnode = null;
    let currindex = 0;

    while (currindex !== index) {
      previousnode = currentnode; // The node before the insertion point
      currentnode = currentnode.next; // The node at the insertion point
      currindex++;
    }
    if (currentnode === this.tail) {
      this.tail = previousnode;
    }
    previousnode.next = currentnode.next;
    this.length--;
  }
  reverse() {
    if (this.length === 1) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
  reverse2() {
    let left = 2;
    let right = 4;
    if (!this.head || left === right) {
      return this.head;
    }

    let dummy = {
      value: null,
      next: this.head,
    };
    let prev = dummy;

    // Move `prev` to the node just before the `left` position
    for (let i = 1; i < left; i++) {
      prev = prev.next;
    }

    // `current` will be the first node of the sublist to be reversed
    let current = prev.next;
    let next = current.next;

    // Reverse the sublist from `left` to `right`
    for (let i = 0; i < right - left; i++) {
      current.next = next.next;
      next.next = prev.next;
      prev.next = next;
      next = current.next;
    }

    // Update the head in case the reversal affected the first node
    this.head = dummy.next;
    return this.head;
  }
}

let myLinkedlist = new Linkedlist(10);
myLinkedlist.prepend(5);
myLinkedlist.prepend(11);
myLinkedlist.prepend(25);
myLinkedlist.insert(3, 99);
console.log(myLinkedlist.reverse2());
console.log(myLinkedlist.printlist());
