'use strict';
/*
Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.
Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.
Note that numbers written as strings are strings and must be sorted with the other strings.
*/

//* My solution:

const dbSort = a =>
  a
    .filter(el => typeof el === 'number')
    .sort((a, b) => a - b)
    .concat(a.filter(el => typeof el === 'string').sort());

//================

// console.log(dbSort([3, 5, 5, 14, 32]));
// console.log(dbSort([6, 2, 3, 4, 5])); // [2, 3, 4, 5, 6]
// dbSort([14, 32, 3, 5, 5]); // [3, 5, 5, 14, 32]
// dbSort([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
// dbSort(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]); // [0, 2,2,'Apple','Banana','Mango','Orange']
// dbSort(['C', 'W', 'W', 'W', 1, 2, 0]); // [0,1,2,'C','W','W','W',]
// console.log(dbSort(['C', 'W', 'W', '3', '1', 'W', 1, 2, 0])); // [0,1,2,'C','W','W','W',]
// dbSort(['C', 'W', 'W', '3', '1', 'W']); // [0,1,2,'C','W','W','W',]
// console.log(dbSort(['C', 'W', 'W', '3', '1', 'W']));
