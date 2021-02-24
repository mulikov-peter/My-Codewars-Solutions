'use strict';
/* Implement a function that returns the minimal and the maximal value of a list (in this order).
 */
function getMinMax(arr) {
  const min = arr.sort((a, b) => a - b).slice(0, 1);
  const max = arr.sort((a, b) => a - b).slice(-1);

  return min.concat(max);
}

// Codewar
// function getMinMax(arr){
//   return [Math.min(...arr),Math.max(...arr)];
// };

// Test
// console.log(getMinMax([1])); //[1,1]);
// console.log(getMinMax([1, 2])); //[1,2]);
// console.log(getMinMax([2, 1])); //[1,2]);
