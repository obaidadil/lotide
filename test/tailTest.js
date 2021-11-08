const assert = require('chai').assert;
const tail = require('../tail');


//string array
let result = tail(['Hello', 'Lighthouse', 'Labs']);
console.log(assertEqual(result.length, 2));
console.log(assertEqual(result[0], 'Lighthouse'));
console.log(assertEqual(result[1], 'Labs'));
//number array
result = tail([1, 3, 4]);
console.log(assertEqual(result.length, 2));
console.log(assertEqual(result[0], 3));
console.log(assertEqual(result[1], 4));
//one element array
result = tail([8]);
console.log(assertEqual(result.length, 0));
console.log(assertEqual(result[0], undefined));
//empty array
result = tail([]);
console.log(assertEqual(result.length, 0));
console.log(assertEqual(result[0], undefined));