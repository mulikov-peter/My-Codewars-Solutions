'use strict';
/*
Create function that takes one positive three digit integer and rearranges its digits to get maximum possible number. Assume that argument is integer. Return null (nil for ruby) if argument is not valid.

maxRedigit(123); // returns 321
*/

const maxRedigit = num => {
  return num > 0 && String(num).length === 3
    ? +num
        .toString()
        .split('')
        .sort((a, b) => b - a)
        .join('')
    : null;
};

// Codewar
// const maxRedigit = function(num) {
//   return num > 99 && num < 1000 ? +String(num).split('').sort().reverse().join('') : null;
// };

// console.log(maxRedigit(123)); // 321
// console.log(maxRedigit(231)); // 321
// console.log(maxRedigit(-1)); // null;
// console.log(maxRedigit(0)); // null;
