'use strict';
/* This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output. 
*/

function preFizz(n) {
  const res = [];
  for (let i = 0; i < n; i++) res.push(i + 1);
  return res;
}

// Codewar 1
// let preFizz = n => [...Array(n)].map((x, i) => i+1);

// Codewar 2
// const preFizz = n => Array.from({length: n}, (_, i) => i + 1)

// Test
// console.log(preFizz(2)); // [1,2], `Array should be from 1 to 2`);
// console.log(preFizz(3)); // [1,2,3], `Array should be from 1 to 3`);
