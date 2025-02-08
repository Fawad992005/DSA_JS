if (head.legnth === 1) {
  return head;
}
let first = head;
let second = first.next;
while (second) {
  let temp = second.next;
  second.next = first;
  first = second;
  second = temp;
}
head.next = null;
head = first;
