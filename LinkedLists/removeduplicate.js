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

let mylist = new Node(1);
mylist.append(1);
mylist.append(2);
mylist.append(3);
mylist.append(3);

function removeduplicates(head) {
  let currentnode = head;
  while (currentnode && currentnode.next) {
    if (currentnode.value === currentnode.next.value) {
      currentnode.next = currentnode.next.next;
    } else {
      currentnode = currentnode.next;
    }
  }
  return head;
}
console.log(removeduplicates(mylist.head));
