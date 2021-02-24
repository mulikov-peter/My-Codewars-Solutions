'use strict';
/* I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.
You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:
{
  'algebra': 6,
  'history': 8,
  'physics': 9,
  'geography': 2,
  'chemistry': 9
}
Return please :

'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
If two or three sons have the same highest marks, you need to choose the younger one. Use the age table which is constant and preloaded:

const ageTable = {
                  'firstSonAge': 14,
                  'secondSonAge': 9,
                  'thirdSonAge': 8
                }
*/

function count(diary) {
  let res = 0;
  for (const x in diary) {
    res += diary[x];
  }
  return res;
}

function whoseBicycle(diary1, diary2, diary3) {
  const diaries = [count(diary1), count(diary2), count(diary3)];

  const sonWinner = diaries.lastIndexOf(Math.max(...diaries));

  return `I need to buy a bicycle for my ${
    sonWinner === 0
      ? 'first'
      : sonWinner === 1
      ? 'second'
      : sonWinner === 2
      ? 'third'
      : 'third'
  } son.`;
}

// Test
// console.log(
//   whoseBicycle(
//     {
//       algebra: 6,
//       history: 7,
//       physics: 8,
//       geography: 9,
//       chemistry: 10,
//     },
//     {
//       algebra: 8,
//       history: 7,
//       physics: 8,
//       geography: 9,
//       chemistry: 10,
//     },
//     {
//       algebra: 6,
//       history: 5,
//       physics: 5,
//       geography: 9,
//       chemistry: 10,
//     }
//   )
// ); // 'I need to buy a bicycle for my second son.'

// console.log(
//   whoseBicycle(
//     {
//       algebra: 6,
//       history: 7,
//       physics: 8,
//       geography: 9,
//       chemistry: 10,
//     },
//     {
//       algebra: 6,
//       history: 7,
//       physics: 8,
//       geography: 9,
//       chemistry: 10,
//     },
//     {
//       algebra: 6,
//       history: 7,
//       physics: 8,
//       geography: 9,
//       chemistry: 10,
//     }
//   )
// ); //'I need to buy a bicycle for my third son.'

// console.log(
//   whoseBicycle(
//     {
//       algebra: 6,
//       history: 7,
//       physics: 8,
//       geography: 9,
//       chemistry: 5,
//     },
//     {
//       algebra: 6,
//       history: 7,
//       physics: 8,
//       geography: 9,
//       chemistry: 10,
//     },
//     {
//       algebra: 6,
//       history: 7,
//       physics: 8,
//       geography: 9,
//       chemistry: 10,
//     }
//   )
// ); // 'I need to buy a bicycle for my third son.'

// console.log(
//   whoseBicycle(
//     {
//       algebra: 3,
//       history: 7,
//       physics: 8,
//       geography: 4,
//       chemistry: 10,
//     },
//     {
//       algebra: 6,
//       history: 7,
//       physics: 8,
//       geography: 9,
//       chemistry: 4,
//     },
//     {
//       algebra: 9,
//       history: 7,
//       physics: 9,
//       geography: 9,
//       chemistry: 10,
//     }
//   )
// ); // 'I need to buy a bicycle for my third son.'
