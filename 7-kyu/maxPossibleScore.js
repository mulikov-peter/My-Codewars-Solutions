'use strict';
/* You're a teacher preparing a test for your students. Each question is worth some number of points. Some of the questions are new to the students, while others are questions they have already seen and practiced. Your scoring system doubles the value of new questions. Your job is to determine the maximum possible score.

Write a function doubleValue that accepts 1) an object of questions (as keys) and points (values) and 2) an array of new questions. The function should return the test's maximum possible score as an integer, where questions that are new are worth double points.

You can assume that all questions are unique.

Questions are case sensitive.

Example: maxPossibleScore({"a": 1, "b": 2, "c": 3}, ["a", "c"]); // 1 * 2 + 2 + 3 * 2 = 10
*/

function maxPossibleScore(obj, arr) {
  let res = 0;

  arr.forEach(el => {
    for (const x in obj) {
      // console.log(el, x, obj[x]);
      if (x === el) obj[x] = obj[x] * 2;
    }
  });

  for (const x in obj) {
    res += obj[x];
  }

  return res;
}

// Codewar
// function maxPossibleScore(obj, arr) {
//   return Object.keys(obj).concat(arr).map(x=>obj[x]||0).reduce((a,b)=>a+b)
// }

// console.log(maxPossibleScore({ a: 1 }, [])); // 1)
// console.log(maxPossibleScore({ a: 1 }, ['a'])); // 2)
// console.log(maxPossibleScore({ a: 1, b: 14 }, ['b'])); // 29)
// console.log(maxPossibleScore({ a: 1, b: 2, c: 4 }, ['a', 'b', 'c'])); // 14)
// console.log(maxPossibleScore({ a: 2, b: 5, c: 8 }, ['c'])); // 23)
