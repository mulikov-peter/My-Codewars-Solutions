'use strict';
/* You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
Your task is to return an array where each object will have a new property 'greeting' with the following string value:
Hi < firstName here >, what do you like the most about < language here >?
For example, given the following input array:

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
your function should return the following array:

[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
Notes:
The order of the properties in the objects does not matter.
The input array will always be valid and formatted as in the example above. */
// const list1 = [
//   {
//     firstName: 'Sofia',
//     lastName: 'I.',
//     country: 'Argentina',
//     continent: 'Americas',
//     age: 35,
//     language: 'Java',
//   },
//   {
//     firstName: 'Lukas',
//     lastName: 'X.',
//     country: 'Croatia',
//     continent: 'Europe',
//     age: 35,
//     language: 'Python',
//   },
//   {
//     firstName: 'Madison',
//     lastName: 'U.',
//     country: 'United States',
//     continent: 'Americas',
//     age: 32,
//     language: 'Ruby',
//   },
// ];

const greetDevelopers = list => {
  for (const key in list) {
    list[
      key
    ].greeting = `Hi ${list[key].firstName}, what do you like the most about ${list[key].language}?`;
  }
  return list;
};

// const greetDevelopers = list =>
//   list.map(
//     x => (
//       (x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`),
//       x
//     )
//   );

// Codewar
// function greetDevelopers(list) {
//   return list.map(x => Object.assign({}, x, {
//     greeting: `Hi ${x.firstName}, what do you like the most about ${x.language}?`
//   }))
// }

// Test
// console.log(greetDevelopers(list1));
