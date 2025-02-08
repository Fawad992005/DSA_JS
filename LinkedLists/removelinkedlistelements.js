// value = 6
// list = [1,2,6,3,4,5,6]
class Node {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
  }
  prepend(value) {
    let newnode2 = {
      value: value,
      next: this.head,
    };
    this.head = newnode2;
  }
  remove(value) {
    let currnode = this.head;
    let prev = null;
    if (currnode !== null && currnode.value === value) {
      this.head = currnode.next; // Move head to the next node
      return; // Exit after removing the head
    }
    while (currnode !== null) {
      if (currnode.value === value) {
        prev.next = currnode.next;
      } else {
        prev = currnode;
      }

      currnode = currnode.next;
    }
  }
}
let newnode = new Node(10);
newnode.prepend(11);
newnode.remove(11);
console.log(newnode.head);
/*let arr = []
let currnode = head;
let prev = null;
while (currnode) {
  if (currnode.value === value) {
    prev.next = currnode.next
  }
  prev = currnode;
  currnode = currnode.next;
}*/
