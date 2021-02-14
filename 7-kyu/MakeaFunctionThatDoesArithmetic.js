'use strict';
/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".
*/

const arithmetic = (a, b, operator) => {
  const options = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };

  return options[operator];
};

// console.log(arithmetic(1, 2, 'add')); // 3
// console.log(arithmetic(8, 2, 'subtract')); // 6
