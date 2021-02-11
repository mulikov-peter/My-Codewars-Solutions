'use script';
/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

const fakeBin = x =>
  x
    .split('')
    .map(n => (n < 5 ? 0 : 1))
    .join('');

// codewar
// function fakeBin(x) {
//   return x.replace(/\d/g, d => d < 5 ? 0 : 1);
// }

// console.log(fakeBin('45385593107843568')); //'01011110001100111')
