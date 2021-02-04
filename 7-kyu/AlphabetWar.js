'use strict';
/*
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
The left side letters and their power:
 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:
 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.
*/

//* My solution:
// const alphabetWar = fight => {
//   const left = {
//     w: 4,
//     p: 3,
//     b: 2,
//     s: 1,
//   };
//   const right = {
//     m: 4,
//     q: 3,
//     d: 2,
//     z: 1,
//   };

//   let leftTotal = 0;
//   let rightTotal = 0;

//   [...fight].forEach(el => {
//     for (const val in left) {
//       if (val === el) leftTotal += left[val];
//     }

//     for (const val in right) {
//       if (val === el) rightTotal += right[val];
//     }
//   });

//   return leftTotal > rightTotal
//     ? 'Left side wins!'
//     : rightTotal > leftTotal
//     ? 'Right side wins!'
//     : "Let's fight again!";
// };

//* My solution - 2
// const alphabetWar = fight => {
//   const left = {
//     w: 4,
//     p: 3,
//     b: 2,
//     s: 1,
//   };
//   const right = {
//     m: 4,
//     q: 3,
//     d: 2,
//     z: 1,
//   };

//   const resultLeft = fight
//     .split('')
//     .reduce((start, cur) => start + (left[cur] || 0), 0);

//   const resulRight = fight
//     .split('')
//     .reduce((start, cur) => start + (right[cur] || 0), 0);

//   return resultLeft > resulRight
//     ? 'Left side wins!'
//     : resulRight > resultLeft
//     ? 'Right side wins!'
//     : "Let's fight again!";
// };

// Codewars:
// function alphabetWar(fight) {
//   let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
//   let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
//   return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
// }

// Example:
// console.log(alphabetWar('z')); //=> Right side wins!
// console.log(alphabetWar('zdqmwpbs')); //=> Let's fight again!
// console.log(alphabetWar('zzzzs')); //=> Right side wins!
// console.log(alphabetWar('wwwwwwz')); //=> Left side wins!
