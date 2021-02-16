'use strict';
/*
Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with an array/list/vector of integers and the expected number n of smallest elements to return.

Also:

the number of elements to be returned cannot be higher than the array/list/vector length;
elements can be duplicated;
in case of duplicates, just return them according to the original order (see third example for more clarity).
Same examples and more in the test cases:

firstNSmallest([1,2,3,4,5],3) === [1,2,3] //well, not technically ===, but you get what I mean
firstNSmallest([5,4,3,2,1],3) === [3,2,1]
firstNSmallest([1,2,3,4,1],3) === [1,2,1]
firstNSmallest([1,2,3,-4,0],3) === [1,-4,0]
firstNSmallest([1,2,3,4,5],0) === []
*/

const firstNSmallest = (array, n) => {
  const arrSmallest = array
    .slice()
    .sort((a, b) => a - b)
    .slice(0, n);

  return array.filter((el, i) => {
    if (arrSmallest.includes(el))
      return arrSmallest.splice(arrSmallest.indexOf(el), 1);
  });
};

// console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 2));
// console.log(firstNSmallest([1, 2, 3, 4, 5], 3)); // [1,2,3]
// console.log(firstNSmallest([9, 8, 7, 6, 5, 4, 3, 2, 1], 3)); //, [3,2,1]
// console.log(firstNSmallest([1, 2, 11, 3, -4, 0], 3)); // [1,-4,0];
// console.log(firstNSmallest([1, 2, 3, 4, 1], 3)); // [1,2,1];

// console.log(
//   firstNSmallest(
//     [
//       -8,
//       8,
//       -8,
//       10,
//       0,
//       -3,
//       -9,
//       -8,
//       0,
//       0,
//       7,
//       7,
//       -4,
//       -10,
//       -9,
//       1,
//       3,
//       -8,
//       -10,
//       2,
//       4,
//       6,
//       -10,
//       6,
//       5,
//       -9,
//       -8,
//       -5,
//       -3,
//       -7,
//       6,
//       -3,
//       -10,
//       -8,
//     ],
//     10
//   )
// ); // [-8, -8, -9, -8, -10, -9, -10, -10, -9, -10]
