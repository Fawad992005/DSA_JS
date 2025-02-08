class Node {
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
}
let k = 2;
let mylist = new Node(1);
mylist.append(2);
mylist.append(3);
mylist.append(4);
mylist.append(5);
function rotate(head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }

  // Step 1: Calculate the length of the linked list
  let length = 1;
  let current = head;
  while (current.next) {
    current = current.next;
    length++;
  }

  // Step 2: Calculate effective rotations
  k = k % length;
  if (k === 0) {
    return head; // No rotation needed
  }

  // Step 3: Find the new tail
  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }
  // Step 4: Set the new head and rearrange the pointers
  let newHead = newTail.next;
  newTail.next = null; // Break the link
  current.next = head; // Connect old tail to old head
  return newHead;
}
console.log(rotate(mylist.head, k));
