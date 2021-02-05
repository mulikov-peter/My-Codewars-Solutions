'use strict';
/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

//* My solution:
const a = 'xyaabbbccccdefww';
const b = 'xxxxyyyyabklmopq';

const longest = (a, b) => [...new Set((a + b).split('').sort())].join('');

// const longest = (a, b) => [...new Set((a + b).sort())].join('');

// console.log(longest(a, b)); //-> "abcdefklmopqwxy"
