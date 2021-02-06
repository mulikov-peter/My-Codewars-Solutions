'use strict';
/*
You are given an n by n ( square ) grid of characters, for example:
[['m', 'y', 'e'], 
 ['x', 'a', 'm'], 
 ['p', 'l', 'e']]
You are also given a list of integers as input, for example:
[1, 3, 5, 8]
You have to find the characters in these indexes of the grid if you think of the indexes as:
[[1, 2, 3], 
 [4, 5, 6], 
 [7, 8, 9]]
Remember that the indexes start from one and not zero.
Then you output a string like this:
"meal"
*/
//*My solution:
const gridIndex = (grid, indices) =>
  indices
    .map(el => grid.flat().filter((_, index) => el === index + 1))
    .join('');

// Codewars-1:
// const gridIndex = (grid, indices) =>
//   indices.map(indice => grid.flat()[indice - 1]).join('');

// Codewar-2:
// const gridIndex = (grid, indices) => indices.map(c => grid.flat(2)[c-1]).join('')

// console.log(
//   gridIndex(
//     [
//       ['h', 'e', 'l', 'l'],
//       ['o', 'c', 'o', 'd'],
//       ['e', 'w', 'a', 'r'],
//       ['r', 'i', 'o', 'r'],
//     ],
//     [5, 7, 9, 3, 6, 6, 8, 8, 16, 13]
//   )
// ); // 'ooelccddrr'
