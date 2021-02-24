'use strict';
/* Given an array of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the array is empty, you should return 0.
*/

const evenLast = numbers =>
  numbers
    .filter((_, i) => i % 2 === 0)
    .reduce((acc, cur) => acc + cur * numbers[numbers.length - 1], 0) || 0;

// Test
// console.log(evenLast([2, 3, 4, 5])); // 30)
