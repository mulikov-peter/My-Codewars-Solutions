'use strict';
/*
Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.
For Example:
[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]
*/

const sumOfMinimums = arr => {
  return arr.reduce((acc, cur) => {
    return acc + Math.min(...cur);
  }, 0);
};

// Test
// console.log(
//   sumOfMinimums([
//     [7, 9, 8, 6, 2],
//     [6, 3, 5, 4, 3],
//     [5, 8, 7, 4, 5],
//   ])
// ); // 9
