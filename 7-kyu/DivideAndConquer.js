'use strict';
/* Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/

const divCon = x => {
  const nums = x
    .filter(el => typeof el === 'number')
    .reduce((acc, cur) => acc + cur, 0);
  const lets = x
    .filter(el => typeof el === 'string')
    .reduce((acc, cur) => acc + Number(cur), 0);
  return nums - lets;
};

// Codewar
// function divCon(x){
//   return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
// }

// Test
console.log(divCon([9, 3, '7', '3'])); // 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])); // 13);
