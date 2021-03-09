'use strict';
/* Array.prototype.sort() is a pretty handy feature of the JS core, but when it comes to order an array of numbers, sometimes it can pollute our code.

In this Kata you have to extend the Array object and add the sortReloaded(dir) method to it in order to make this task easier and cleaner.

It should receive a dir parameter which has with two possible values 'asc' or 'desc', and return a new array ordered ascendingly or descendingly respectively. If no dir parameter is set it should assume 'asc' by default. If it has an invalid value, return false.

For the effects of this Kata, all the arrays will contain only Integer numbers so you don't have to care about validating them. */

// Array.prototype.sortReloaded = function (dir = 'asc') {
//   const arr = this.slice();
//   if (dir === 'asc') return arr.sort((a, b) => a - b);
//   if (dir === 'desc') return arr.sort((a, b) => b - a);
//   return false;
// };

// Test
// console.log([3, 1, 5, 3, 6, 1, 2].sortReloaded('asc'));
// console.log([2, 3, 4, 3, 2, 9, 1].sortReloaded('desc'));
// console.log([2, 3].sortReloaded('foo'));
// console.log([4, 7, 2].sortReloaded());
