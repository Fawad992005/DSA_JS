let counter = 0;
function increment() {
  if (counter > 3) {
    return "done";
  }
  counter++;
  return increment();
}
console.log(increment());
