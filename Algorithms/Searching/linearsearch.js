let array = ["Godzilla", "Kong", "Pakistan", "India", "America"];

console.log(
  array.find((item) => {
    return item === "Godzilla";
  })
);

console.log(array.includes("Godzilla"));

console.log(
  array.findIndex((item) => {
    return item === "Godzilla";
  })
);
console.log(array.indexOf("Godzilla"));

// Linear Search
// Best case is O(1) if item is at the beginning
// Worst case we have to loop through the entire list O(n)
