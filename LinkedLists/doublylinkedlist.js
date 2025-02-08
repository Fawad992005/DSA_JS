class Linkedlist {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newnode = {
      value: value,
      next: null,
      prev: null,
    };
    newnode.prev = this.tail;
    this.tail.next = newnode;
    this.tail = newnode;
    this.length++;
  }
  prepend(value) {
    let newnode2 = {
      value: value,
      next: this.head,
      prev: null,
    };
    this.head.prev = newnode2;
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
      prev: null,
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
    newnode.prev = previousnode;
    newnode.next = currentnode; // Link the new node to the current node at the index
    currentnode.prev = newnode;

    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }

    // Special case: Removing the head (first node)
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
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
    currentnode.next.prev = previousnode;
    this.length--;
  }
}

let myLinkedlist = new Linkedlist(10);
myLinkedlist.prepend(6);
myLinkedlist.append(8);
myLinkedlist.insert(1, 4);
myLinkedlist.remove(1);
console.log(myLinkedlist.printlist());
console.log(myLinkedlist);
