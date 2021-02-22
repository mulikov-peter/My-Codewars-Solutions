'use strict';
/* You must implement a function that return the difference between the biggest and the smallest value in a list(lst) received as parameter.

The list(lst) contains integers, that means it may contain some negative numbers.

If the list is empty or contains a single element, return 0.

The list(lst) is not sorted.

maxDiff([1, 2, 3, 4]); // return 3, because 4 - 1 == 3
maxDiff([1, 2, 3, -4]); // return 7, because 3 - (-4) == 7
*/

const maxDiff = list => {
  const sm = Math.min(...list);
  const bg = Math.max(...list);

  return !list.length ? 0 : bg - sm;
};

// Test
// console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])); // 6);
// console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])); // 11);
// console.log(maxDiff([0, 1, 2, 3, 4, 5, 16])); // 16);
// console.log(maxDiff([16])); // 0);
// console.log(maxDiff([])); // 0);
