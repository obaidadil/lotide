const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const objOneKey = Object.keys(object1);
  const objTwoKey = Object.keys(object2);
  if (objOneKey.length !== objTwoKey.length) return false;
  for (const key of objOneKey) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let result = eqObjects(actual, expected);
  result ? console.log(`🟩🟩🟩 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🟥🟥🟥 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

//test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

const cdd = { c: "1", d: ["2", 3] };
const ddc = { d: ["2", 3], c: ["1"] };
assertObjectsEqual(cdd, ddc); // => false
const cdd2 = { c: "1", d: 2 };
assertObjectsEqual(cdd, cdd2); // => false

module.exports = assertObjectsEqual;