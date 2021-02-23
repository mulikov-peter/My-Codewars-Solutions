'use strict';
/* Given the integer n return odd numbers as they are, but subtract 1 from even numbers.

Note:

The function body length (without the name of the function and argument) is limited to 12 characters */

const alwaysOdd = n => (n % 2 ? n : n - 1);
// const alwaysOdd = n => n - (n % 2 === 0);

// Test
// console.log(alwaysOdd(2)); //1)
// console.log(alwaysOdd(1)); //1)
// console.log(alwaysOdd(5)); //5)
// console.log(alwaysOdd(8)); //7)
// console.log(alwaysOdd(-3)); //-3)
// console.log(alwaysOdd(-14)); //-15)
// console.log(alwaysOdd(-19)); //-19)
