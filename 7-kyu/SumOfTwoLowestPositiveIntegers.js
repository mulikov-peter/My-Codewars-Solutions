'use strict';
/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

//* My solution:
const arr1 = [10, 343445353, 3453445, 3453545353453];
const arr = [19, 5, 42, 2, 77];
sumTwoSmallestNumbers = numbers => {
  arr.sort((a, b) => {
    return a - b;
  });
  return arr[0] + arr[1];
};

// sumTwoSmallestNumbers(arr);
// console.log('addasf');
