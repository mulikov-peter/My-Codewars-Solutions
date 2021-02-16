'use strict';
/* Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

const switcheroo = x =>
  x
    .split('')
    .map(el => (el === 'a' ? (el = 'b') : el === 'b' ? (el = 'a') : el))
    .join('');

// Codewar
// const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")

// Test
// console.log(switcheroo('abc')); // 'bac');
// console.log(switcheroo('aaabcccbaaa')); // 'bbbacccabbb');
// console.log(switcheroo('ccccc')); // 'ccccc');
