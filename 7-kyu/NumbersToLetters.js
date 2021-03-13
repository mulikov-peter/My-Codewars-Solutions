'use strict';
/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

// function switcher(x) {
//   const alphabet = [...Array(26)].map((_, i) => {
//     return `${String.fromCharCode(i + 97)}`;
//   });

//   const signs = ['!', '?', ' '];

//   const fullAlphabet = [...alphabet.reverse(), ...signs];

//   console.log(fullAlphabet);

//   const res = x
//     .map((el, i) => {
//       return fullAlphabet[Number(el) - 1];
//     })
//     .join('');

//   return res;
// }

// Codewar
// function switcher(x)
// {
//   return x.map(a =>
//     {
//       if(a == 27) return "!";
//       if(a == 28) return "?";
//       if(a == 29) return " ";
//       return String.fromCharCode(97 + 26 - parseInt(a));

//     }).join('');
// }

// const alphabet = '★zyxwvutsrqponmlkjihgfedcba!? ';
// const switcher = ns => ns.map(n => alphabet[n]).join('');

// Test
// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // 'codewars');
