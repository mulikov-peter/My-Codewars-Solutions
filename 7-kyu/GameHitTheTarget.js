'use strict';
/*
Hit the target
given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
There will be only 1 arrow '>' and 1 target 'x'
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
Examples:
given matrix 4x4:
[
[' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' '], --> return true
[' ', '>', ' ', 'x'],
[' ', ' ', ' ', ' ']
]
given matrix 4x4:
[
[' ', ' ', ' ', ' '],
[' ', '>', ' ', ' '], --> return false
[' ', ' ', ' ', 'x'],
[' ', ' ', ' ', ' ']
]
given matrix 4x4:
[
[' ', ' ', ' ', ' '],
[' ', 'x', '>', ' '], --> return false
[' ', '', ' ', ' '],
[' ', ' ', ' ', ' ']
]
In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
Happy hacking as they say!
*/

const solution = mtrx => {
  let result = '';
  mtrx.forEach((el, i) => {
    if (el.includes('>') && el.includes('x')) {
      const targetIndex = el.indexOf('x');
      const scopeIndex = el.indexOf('>');

      if (targetIndex > scopeIndex) result = true;
      else result = false;
    }
  });
  return result ? true : false;
};

// Codewars
// const solution = mtrx =>{
//   const arr = mtrx.filter(el => el.includes('>') && el.includes('x') )[0] || []
//   return arr.indexOf('>') < arr.indexOf('x')
// }

//===
// const solution = mtrx => {
//   for (let row of mtrx) {
//     let target = row.indexOf('x');
//     let scope = row.indexOf('>');
//     if (target > -1 && scope > -1 && target > scope) return true;
//   }
//   return false;
// }

// console.log(
//   solution([
//     ['>', ''],
//     [' ', 'x'],
//   ])
// );
// // false

// console.log(
//   solution([
//     [' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', '>', ' ', 'x'],
//     [' ', ' ', '', ' ', ' '],
//   ])
// );
