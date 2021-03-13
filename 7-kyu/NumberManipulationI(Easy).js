'use strict';
/*
For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

Example:

192827764920 --> 192827000000

938473 --> 938000

2837743 --> 2830000
*/

// function manipulate(num) {
//   const str = [...String(num)];
//   const index = str.length / 2;
//   return parseInt(
//     str
//       .map((el, i) => {
//         if (index % 1 !== 0) return i + 1 < index ? el : 0;
//         else return i < index ? el : 0;
//       })
//       .join('')
//   );
// }

// Test
// console.log(manipulate(192827764920)); // 192827000000);
// console.log(manipulate(838444)); // 192827000000);
// console.log(manipulate(432)); // 192827000000);
// console.log(manipulate(838473)); // 838000);
// console.log(manipulate(8173648710293847)); // 8173648700000000);
