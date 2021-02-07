'use strict';

/*
This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
*/

//* My solution
const evensAndOdds = num =>
  num % 2 === 0 ? num.toString(2) : num.toString(16);

// console.log(evensAndOdds(2)); //'10'
// console.log(evensAndOdds(4)); //'10'
// console.log(evensAndOdds(6)); //'10'
// console.log(evensAndOdds(9)); //'9'
// console.log(evensAndOdds(13)); //'d'
