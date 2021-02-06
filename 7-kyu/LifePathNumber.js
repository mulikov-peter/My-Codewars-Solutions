'use strict';
/*
A person's Life Path Number is calculated by adding each individual number in that person's date of birth, untill it is reduced to a single digit number.

For example, Albert Einstein's birthday is March 14, 1879. The calculation of his Life Path Number would look like this:

year: 1 + 8 + 7 + 9 = 25; 2 + 5 = 7
month: 0 + 3 = 3
day: 1 + 4 = 5
final result: 7 + 3 + 5 = 15; 1 + 5 = 6
Einstein's Life Path Number is therefore: 6

Write the function lifePathNumber(dateOfBirth) that accepts a date of birth (as a string) on the following format: "yyyy-mm-dd". Where "y" is year, "m" is month and "d" is day. The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.

You do not need to check that the input to the lifePathNumber()-function is correct format. You can assume that the input to the function will always be a valid date (as a string) with the format: "yyyy-mm-dd".

Note: If the month or day is a single digit number, then it shall be preceeded by a 0 (zero). For example, in Einstein's case the month of March is 3; which is a single digit number. The function shall in this case be called with the following parameter: lifePathNumber("1879-03-14").
*/
// year: 1 + 8 + 7 + 9 = 25; 2 + 5 = 7
// month: 0 + 3 = 3
// day: 1 + 4 = 5
// final result: 7 + 3 + 5 = 15; 1 + 5 = 6
// Einstein's Life Path Number is therefore: 6

//* My solution
const lifePathNumber = dateOfBirth => {
  dateOfBirth = dateOfBirth.split('-');

  const lifenum = dateOfBirth
    .map((el, i) => {
      return el.split('').reduce((sum, cur) => Number(sum) + Number(cur), 0);
    })
    .join('')
    .split('')
    .reduce((sum, cur) => Number(sum) + Number(cur), 0)
    .toString()
    .split('')
    .reduce((sum, cur) => Number(sum) + Number(cur), 0)
    .toString()
    .slice(0, 1);
  return Number(lifenum);
};

// Codewar 1
// const lifePathNumber = dateOfBirth => dateOfBirth.replace(/\D/g, '') % 9 || 9;

// Codewar 2
// const lifePathNumber = dateOfBirth => {
//   let num = dateOfBirth.split('-').join('');

//   do {
//     num = ('' + num).split('').reduce((p, c) => +p + +c);
//   } while (num > 9);

//   return num;
// };

// console.log(lifePathNumber('1879-03-14')); // 6
// console.log(lifePathNumber('1815-12-10')); // 1
// console.log(lifePathNumber('1955-10-28')); // 4
// console.log(lifePathNumber('1961-07-04')); // 1
// console.log(lifePathNumber('1985-09-17')); // 4
// console.log(lifePathNumber('1985-09-02')); // 7
