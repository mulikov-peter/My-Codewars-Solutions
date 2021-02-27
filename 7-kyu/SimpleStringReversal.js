'use strict';
/* n this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces. */

// const solve11 = str => {
//   let arr = [...str].filter(x => x !== ' ');
//   return str.replace(/\S/g, () => arr.pop());
// };

// Test
// console.log(solve11('codewars')); //"srawedoc");
// console.log(solve11('your code')); //"edoc ruoy");
// console.log(solve11('your code rocks')); //"skco redo cruoy");
// console.log(solve11('i love codewars')); //"s rawe docevoli");
