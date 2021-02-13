'use strict';
/*
The pipes connecting your level's stages together need to be fixed before you recieve any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

#Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

#Example:
Input: 1,3,5,6,7,8
Output: 1,2,3,4,5,6,7,8
*/

const pipeFix = numbers => {
  const result = [];
  for (let i = numbers[0]; i <= numbers.slice(-1); i++) {
    result.push(i);
  }
  return result.sort((a, b) => a - b);
};

// Codewar
// const pipeFix = nums =>
//   Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);

// Test
// console.log(pipeFix([-1, 4])); //[-1,0,1,2,3,4])
// console.log(pipeFix([6, 9])); //[6,7,8,9])
// console.log(pipeFix([1, 2, 3, 12])); // [1,2,3,4,5,6,7,8,9,10,11,12]
