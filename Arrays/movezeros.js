let array = [0, 0, 1];

function removezeros(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === 0) {
      array.push(array[i]);
      array.splice(i, 1); // Remove the zero at index i
    }
  }
  return array;
}

console.log(removezeros(array)); // Output: [1, 0, 0]
