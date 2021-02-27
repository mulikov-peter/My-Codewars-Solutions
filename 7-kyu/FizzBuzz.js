'use strict';
/* Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

// function fizzbuzz(n) {
//   const res = [];
//   for (let i = 1; i <= n; i++) {
//     i % 3 === 0 && i % 5 === 0
//       ? res.push('FizzBuzz')
//       : i % 5 === 0
//       ? res.push('Buzz')
//       : i % 3 === 0
//       ? res.push('Fizz')
//       : res.push(i);
//   }
//   return res;
// }

// Codewar
// const fizzbuzz = n => Array(n).fill(1).map((x,y)=>x+y).map(n=>(n%3?'':'Fizz')+(n%5?'':'Buzz')||n);

// Test
// console.log(fizzbuzz(30)); // [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']
