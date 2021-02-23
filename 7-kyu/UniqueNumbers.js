'use strict';
/* You have to write a function which returns unique numbers array. You don't need to validate input arg arr. Retain the original order of the input.

Examples:

uniqueNumbers([1,1,2,2]) => [1,2]
uniqueNumbers([1,2,3,1]) => [1,2,3]
*/
const uniqueNumbers = numbersArray => [...new Set(numbersArray)];

// function uniqueNumbers(numbersArray) {
//   const unique = numbersArray.filter((v, i, a) => a.indexOf(v) === i);
//   return unique;
// }

// console.log(uniqueNumbers([1, 1, 2, 1, 2, 3, 1]));
// console.log(uniqueNumbers([1, 1, 2, 2]));
