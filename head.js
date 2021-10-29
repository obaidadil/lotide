const assertEqual = function(actual, expected) {
  return actual === expected ? `🟩 🟩 🟩 Assertion Passed: ${actual} === ${expected}` : `🟥 🟥 🟥 Assertion Failed: ${actual} !== ${expected}`;
};

//main function will return the first item in an array
const head = function(array) {
  return array[0];
};

//test code
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([-89]), -89));
console.log(assertEqual(head([]), undefined));