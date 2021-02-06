'use strict';
/*
How many days are we represented in a foreign country?
My colleagues make business trips to a foreign country. We must find the number of days our company is represented in a country. Every day that one or more colleagues are present in the country is a day that the company is represented. A single day cannot count for more than one day.
Write a function that recieves a list of pairs and returns the number of days that the company is represented in the foreign country. The first number of the pair is the number of the day of arrival and the second number of the pair is the day of departure of someone who travels, i.e. 1 january is number 1 and 31 of december is 365.

Example:
daysRepresented ([[10,17],[200,207]])
Returns 16 because there are two trips of 8 days, which add up to 16.
*/

//* my solution:

const daysRepresented = trips => {
  let set = new Set();

  trips.forEach(el =>
    [...new Array(el[1] - el[0] + 1)].forEach((_, i) => {
      console.log(i);
      return set.add(i + el[0]);
    })
  );
  return set.size;
};

// console.log(
//   'result:',
//   daysRepresented([
//     [2, 5],
//     [4, 7],
//   ])
// ); // 6

// console.log(
//   'result:',
//   daysRepresented([
//     [138, 151],
//     [50, 62],
//     [225, 232],
//     [143, 164],
//     [173, 182],
//     [75, 97],
//   ])
// ); // 81

// console.log(
//   daysRepresented([
//     [10, 15],
//     [25, 35],
//   ])
// );
// 17;

// console.log(
//   daysRepresented([
//     [2, 8],
//     [220, 229],
//     [10, 16],
//   ])
// ); // 24
