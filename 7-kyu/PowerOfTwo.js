'use strict';
/* Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2. */

const isPowerOfTwo = n => Math.log2(n) - Math.floor(Math.log2(n)) === 0;

// Codewar
// function isPowerOfTwo(n){
//   return Number.isInteger(Math.log2(n));
// }

// Test
// console.log(isPowerOfTwo(2)); // true)
// console.log(isPowerOfTwo(4096)); // true)
// console.log(isPowerOfTwo(5)); // false)
// console.log(isPowerOfTwo(1)); // true)
// console.log(isPowerOfTwo(0)); // false)
// console.log(isPowerOfTwo(234)); // false)
// console.log(isPowerOfTwo(1048580)); // false)
// console.log(isPowerOfTwo(262140)); // false)
