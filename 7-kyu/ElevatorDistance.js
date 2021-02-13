'use strict';

/*
Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// simple examples
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18

// if two consecutive floors are the same,
//distance travelled between them is 0
elevatorDistance([3,3]) = 0
Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.
*/

const elevatorDistance = array => {
  // let res = 0;
  // array.forEach((el, i) => {
  //   if (array[i + 1] !== undefined) res += Math.abs(array[i + 1] - el);
  // });
  // return res;

  return array.reduce(
    (acc, cur, i, arr) =>
      arr[i + 1] !== undefined ? acc + Math.abs(arr[i + 1] - cur) : acc,
    0
  );
};

// Codewar
// function elevatorDistance(array) {
//   return array.slice(1).reduce((s,n,i)=>s+Math.abs(n-array[i]),0)
// }

// Test
// console.log(elevatorDistance([5, 2, 8])); // 9);
// console.log(elevatorDistance([1, 2, 3])); // 2);
// console.log(elevatorDistance([7, 1, 7, 1])); // 18);
