'use strict';
/*
Write a function that returns only the decimal part of the given number.
You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.
Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
*/

//* MY solution:
// const getDecimal = n => Number(`0${String(n).slice(-2)}`);

const getDecimal = n => {
  const numStr = String(n);
  const index = numStr.indexOf('.');
  return Number(`0${numStr.slice(index, numStr.length)}`);
};
// console.log(getDecimal(0.4)); // 0.4;
// getDecimal(-0.2) // 0.2

// Codewars:
// const getDecimal = n => Math.abs(n % 1);
// console.log(getDecimal(0.4)); // 0.4;
