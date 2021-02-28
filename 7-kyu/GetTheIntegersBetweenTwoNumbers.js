'use strict';
/* Build a function that can get all the integers between two given numbers.
Example:
(2,9)
Should give you this output back:
[ 3, 4, 5, 6, 7, 8 ]
If startNum is the same as endNum, return an empty array.
*/

// const range = (startNum, endNum) => {
//   // let res = [];
//   // for (let i = startNum + 1; i <= endNum - 1; i++) {
//   //   res.push(i);
//   // }
//   // return res;

//   return Array(endNum - startNum - 1)
//     .fill(startNum)
//     .map((el, i) => el + i + 1);
// };

// Codewar
// const range = (start, end) => Array.from({length: end-start-1}, (_, i)=> i+1+start)

// Test
// console.log(range(2, 9)); //[3,4,5,6,7,8])
// console.log(range(6, 8)); //[7])
// console.log(range(2, 9)); //[3,4,5,6,7,8])
