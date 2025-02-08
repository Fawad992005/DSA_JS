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
let list1 = new Node(4);
let list2 = new Node(5);
list1.append(1);
list1.append(8);
list1.append(4);
list1.append(5);
list2.append(6);
list2.append(1);
list2.append(8);
list2.append(4);
list2.append(5);

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let pointerA = headA;
  let pointerB = headB;

  // Calculate lengths of both lists
  let lengthA = 0;
  let lengthB = 0;

  let tempA = headA;
  let tempB = headB;

  // Get length of list A
  while (tempA) {
    lengthA++;
    tempA = tempA.next;
  }

  // Get length of list B
  while (tempB) {
    lengthB++;
    tempB = tempB.next;
  }

  // Find the difference in lengths
  let diff = Math.abs(lengthA - lengthB);
  console.log(diff);

  // Move the pointer of the longer list ahead by 'diff' nodes
  if (lengthA > lengthB) {
    for (let i = 0; i < diff; i++) {
      pointerA = pointerA.next;
    }
  } else {
    for (let i = 0; i < diff; i++) {
      pointerB = pointerB.next;
    }
  }

  // Now traverse both lists together until pointers meet or reach null
  while (pointerA && pointerB) {
    if (pointerA === pointerB) {
      return pointerA; // Intersection found
    }
    pointerA = pointerA.next;
    pointerB = pointerB.next;
  }

  return null;
}
console.log(getIntersectionNode(list1, list2));
