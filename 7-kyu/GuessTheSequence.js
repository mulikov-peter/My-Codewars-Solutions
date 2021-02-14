'use strict';
/* You read the title.
You must guess a sequence.
It will have something to do with the number given.
Example:
  x = 16
  result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
be ready for large x
*/

function sequence(x) {
  const result = [];
  for (let i = 0; i < x; i++) {
    result.push(i + 1);
  }
  return result.sort();
}

// Codewar
// const sequence = ($) => Array.from({length: $}, (_,i)=> i+1).sort();

// sequence=x=>[...Array(x)].map((_,i)=>i+1).sort()

// Test
// console.log(sequence(9)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(sequence(16)); // [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
