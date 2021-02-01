'use strict';
/*
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/

//* My solution:
// const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
// const disemvowel = str => {
//   str = str.split('');

//   str.map((letter, index) =>
//     vowels.forEach((vow, i) => {
//       if (letter === vow) str.splice(index, 1, '');
//     })
//   );
//   return str.join('');
// };

// CodeWar:
const disemvowel = str => str.replace(/[aeiou]/gi, '');

// CodeWar:
//       const vowels = 'aeiou';

// function disemvowel(str) {
//   return str
//     .split('')
//     .filter(letter => !vowels.includes(letter.toLowerCase()))
//     .join('');
// }
// console.log(disemvowel('This website is for losers LOL!'));
// disemvowel('This website is for losers LOL!');
