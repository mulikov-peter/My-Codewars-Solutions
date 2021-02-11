'use strict';
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F
*/

const abbrevName = name => {
  const nameUpper = name.toUpperCase().split(' ');
  return `${nameUpper[0][0]}.${nameUpper[1][0]}`;
};

// codewar 1
// function abbrevName(name){
//   return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
// }

// codewar 2
// const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

// console.log(abbrevName('Sam Harris')); // S.H
