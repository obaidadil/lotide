
const eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
  
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};


const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  result ? console.log(`🟩🟩🟩 Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🟥🟥🟥 Assertion Failed: ${arr1} !== ${arr2}`);
};

const middle = function(array) {
  let length = array.length;
  //return [] if array has one or two elements
  if (length === 0 || length === 1 || length === 2) {
    return [];
  } else if (length % 2 === 0) {

    let middleIndex = (length / 2) - 1;
    return array.slice(middleIndex, middleIndex + 2);
  } else {
   
    let output = [];
    output.push(array[(length - 1) / 2]);
    return output;
  }
};