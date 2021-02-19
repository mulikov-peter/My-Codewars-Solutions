'use strict';
/* In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
*/

function pairs(ar) {
  const a = [];
  const b = [];
  let count = 0;
  ar.forEach((el, i) => {
    if (i % 2 === 0) a.push(el);
    else b.push(el);
  });

  a.forEach((el, i) => {
    if (el === b[i] - 1) count++;
    if (el === b[i] + 1) count++;
  });

  return count;
}

// Codewar 1
// function pairs(array, count = 0) {
//   for (let i = 0; i < array.length; i += 2)
//     if (Math.abs(array[i] - array[i + 1]) === 1)
//       count += 1;
//   return count;
// }

// Codewar 2
// const pairs = ar =>
//   ar.reduce((pre, val, idx) => pre + (++idx % 2 && Math.abs(val - ar[idx]) === 1), 0);

// Test
// console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5])); //3);
// console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])); //2);
// console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])); //0);
// console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62])); //4);
// console.log(pairs([73, 72, 8, 9, 73, 72])); //3);
