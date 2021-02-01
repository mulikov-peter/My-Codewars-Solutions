'use strict';
/*
If　a = 1, b = 2, c = 3 ... z = 26
Then l + o + v + e = 54
and f + r + i + e + n + d + s + h + i + p = 108
So friendship is twice stronger than love :-)
The input will always be in lowercase and never be empty.
*/

//* My solution:
const wordsToMarks = string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  string = string.split('');

  let sum = 0;
  alphabet.map((x, i) => {
    string.forEach(el => {
      if (el === x) sum += i + 1;
    });
  });
  return sum;
};

// codewar's solution:
// const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

// codewar's solution:
//       function wordsToMarks(string){
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let marks = 0;
//   string.split('').forEach((char) => {
//     marks += alphabet.indexOf(char) + 1;
//   });
//   return marks;
// }

// console.log(wordsToMarks('attitude'));
