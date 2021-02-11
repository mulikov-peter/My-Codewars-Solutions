'use strict';
/*
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
For example:
solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.
*/

//* My solution:
const solve = (str1, str2) => {
  const newArr = [];
  for (const letter of str1) {
    if (!str2.includes(letter)) {
      newArr.push(letter);
    }
  }

  for (const letter of str2) {
    if (!str1.includes(letter)) {
      newArr.push(letter);
    }
  }
  // console.log(newArr.join(''));
  // return newArr.join('');

  // CodeWar1:
  // const unique = [...str1, ...str2].reduce(
  //   (acc, cur) => (acc += str1.includes(cur) && str2.includes(cur) ? '' : cur),
  //   ''
  // );
  // return unique;

  // Codewars2
  // console.log((str1 + str2).split(''));
  // return (str1 + str2)
  //   .split('')
  //   .filter(letter => !str1.includes(letter) || !str2.includes(letter))
  //   .join('');
};
// console.log(solve('xyab', 'xzca'));
