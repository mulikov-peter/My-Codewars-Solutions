'use strict';
/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

const quarterOf = month =>
  month <= 3
    ? 1
    : month <= 6 && month > 3
    ? 2
    : month <= 9 && month > 6
    ? 3
    : 4;

// Codewar 1
// const quarterOf = (month) => {
//   return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
// }

// Codewar 2
// const quarterOf = m => Math.ceil(m/3);

// Test
// console.log(quarterOf(1)); // 1
// console.log(quarterOf(3)); // 1
// console.log(quarterOf(6)); // 2
// console.log(quarterOf(8)); // 3
// console.log(quarterOf(9)); // 3
// console.log(quarterOf(11)); // 4
