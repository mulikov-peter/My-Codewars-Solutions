'use strict';
/* You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
your function should return true. */
// const list111 = [
//   {
//     firstName: 'Daniel',
//     lastName: 'J.',
//     country: 'Aruba',
//     continent: 'Americas',
//     age: 42,
//     language: 'JavaScript',
//   },
//   {
//     firstName: 'Kseniya',
//     lastName: 'T.',
//     country: 'Belarus',
//     continent: 'Europe',
//     age: 22,
//     language: 'JavaScript',
//   },
//   {
//     firstName: 'Hanna',
//     lastName: 'L.',
//     country: 'Hungary',
//     continent: 'Europe',
//     age: 65,
//     language: 'JavaScript',
//   },
// ];

// const list2 = [
//   {
//     firstName: 'Mariami',
//     lastName: 'G.',
//     country: 'Georgia',
//     continent: 'Europe',
//     age: 29,
//     language: 'Python',
//   },
//   {
//     firstName: 'Mia',
//     lastName: 'H.',
//     country: 'Germany',
//     continent: 'Europe',
//     age: 39,
//     language: 'Ruby',
//   },
//   {
//     firstName: 'Maria',
//     lastName: 'I.',
//     country: 'Greece',
//     continent: 'Europe',
//     age: 32,
//     language: 'C',
//   },
// ];

const isSameLanguage = list => {
  const lang = list[0].language;
  return list.every(el => el.language === lang);
};

// Codewar
// function isSameLanguage(list) {
//   return list.every(e => e.language === list[0].language);
// }

// Test
// console.log(isSameLanguage(list111));
// console.log(isSameLanguage(list2));
