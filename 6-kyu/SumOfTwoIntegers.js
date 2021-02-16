'use strict';
/*
Task
Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

Notes
The numbers (a,b) may be positive , negative values or zeros .

Returning value will be an integer .

Javascript: the Array reduce methods are disabled, along with eval, require, and module .
*/

const Add = (x, y) => (y === 0 ? x : Add(x ^ y, (x & y) << 1));

// Test
// console.log(Add(5, 19)); //==> return (24)
// console.log(Add(-27, 18)); //==> return (-9)
// console.log(Add(-14, -16)); // ==> return (-30)
