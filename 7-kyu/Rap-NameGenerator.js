'use strict';
/* It seems as though the infamous soundcloud rapper "6ix 9ine" has been locked away for good. As sad as this may be, his name will surely live on...

Write a function that takes a string representing a date-of-birth as an argument ("dd.mm.yy") and returns a string containing the generated Rap-Name.

How to figure out one's Rap-Name:

Find the average of the two digits that make up the DAY of birth. ("DD.mm.yy")
Find the average of the two digits that make up the YEAR of birth. ("dd.mm.YY")
Note: only integers are admissible, therefore round up averages that are decimal
Note: if the average of the YEAR of birth is 0 (in the case of "dd.mm.00"), the format is '0ero'
Return a single string containing both numbers represented in the following format - e.g, '3hree 6ix'
format = the respective number replaces the first character for the word of said number. 'three' becomes '3hree'
*/

function rapNameGen(dob) {
  const day = Math.round((Number(dob[0]) + Number(dob[1])) / 2);
  const year = Math.round((Number(dob[6]) + Number(dob[7])) / 2);

  const obj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  const name = `${day}${obj[day].slice(1)} ${year}${obj[year].slice(1)}`;
  return name;
}

// Test
// console.log(rapNameGen('23.11.93')); // '3hree 6ix')
// console.log(rapNameGen('14.07.84')); // '3hree 6ix')
// console.log(rapNameGen('03.49.04')); // '2wo 2wo')
// console.log(rapNameGen('01.01.01')); // '1ne 1ne')
// console.log(rapNameGen('24.06.94')); // '3hree 7even')
// console.log(rapNameGen('24.06.00')); // '3hree 0ero')
