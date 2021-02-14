'use strict';
/* Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically.
*/

const convertHashToArray = hash => Object.entries(hash).sort();

// Test
// console.log(convertHashToArray({ name: 'Jeremy', age: 24 })); //[["age", 24], ["name", "Jeremy"]]);
// console.log(
//   convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' })
// ); //[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
// console.log(convertHashToArray({ product: 'CodeWars', powerLevelOver: 9000 })); //[["powerLevelOver", 9000], ["product", "CodeWars"]]);
// console.log(convertHashToArray({})); //[]);
