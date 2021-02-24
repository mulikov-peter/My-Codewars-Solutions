'use strict';
/* Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/
const oddOrEven = array =>
  array.reduce((acc, cur) => acc + cur, 0) % 2 ? 'even' : 'odd';

// Test
// console.log(oddOrEven([0])); // 'even');
// console.log(oddOrEven([1])); // 'odd');
// console.log(oddOrEven([])); // 'even');
// console.log(oddOrEven([0, -1, -5])); // 'even');
// console.log(oddOrEven([0, -1, -3])); // 'even');
// console.log(oddOrEven([-1023, 1, -2])); // 'even');
// console.log(oddOrEven([0, 1, 2])); // 'odd')
// console.log(oddOrEven([0, 1, 4])); // 'odd')
// console.log(oddOrEven([1023, 1, 3])); // 'odd')
