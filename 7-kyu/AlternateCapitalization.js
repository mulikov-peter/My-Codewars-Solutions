'use strict';
/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
*/

//* My solution:
function capitalize(str) {
  str = str.split('');
  const resultOddUp = [];
  const resultEvenUp = [];
  for (let [index, letter] of str.entries()) {
    resultEvenUp.push(index % 2 ? letter.toUpperCase() : letter);

    resultOddUp.push(index % 2 ? letter : letter.toUpperCase());
  }
  return [resultOddUp.join(''), resultEvenUp.join('')];
}

// function capitalize(s) {
//   const odd = s
//     .split('')
//     .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
//     .join('');
//   const even = s
//     .split('')
//     .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
//     .join('');
//   return [even, odd];
// }

// capitalize('abcdef');
