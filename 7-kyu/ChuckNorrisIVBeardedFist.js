'use strict';
/* It has long been rumoured that behind Chuck's beard is not a chin, but another fist!

When shaving, Chuck accidentally punched himself in the face. He is the only man that could take that punch without dying, but that doesn't mean it didn't sting! Chuck can't remember a thing - he needs your help!!

Hidden within the provided sequence of sequences are numbers that represent the letters of the words for some of Chuck's favourite things! Your job is to translate them, and return the words so that Chuck can get back to the business of punching and kicking things.
*/

// function fistBeard(arr) {
// return arr
//   .flat()
//   .map(el => {
//     return String.fromCharCode(el);
//   })
//   .join('');
// }

// function fistBeard(arr) {
//   const result = []
//     .concat(...arr)
//     .map(el => String.fromCharCode(el))
//     .join('');
//   return result;
// }

// Codewar
// const fistBeard = arr => String.fromCharCode(...[].concat(...arr));

// const fistBeard = arr => String.fromCharCode(...arr.reduce((a, b) => a.concat(b)));

// Test
// console.log(fistBeard([[78], [117, 110, 99], [104, 117], [107, 115]])); // 'Nunchuks');
// console.log(
//   fistBeard([
//     [70, 97, 99],
//     [101, 45, 75, 105, 99, 107],
//   ])
// ); // 'Face-Kick');
