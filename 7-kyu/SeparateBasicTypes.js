'use strict';
/* Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected
So, for this input:

['a', 1, 2, false, 'b']
expected output is:

{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
}
*/
// if (typeof el === 'string') res.string = [el];
// if (typeof el === 'boolean') res.boolean = [el];

// const separateTypes = input => {
//   const res = {};
//   const numbers = input.filter(el => typeof el === 'number');
//   const strings = input.filter(el => typeof el === 'string');
//   const booleans = input.filter(el => typeof el === 'boolean');

//   res.number = numbers;
//   res.string = strings;
//   res.boolean = booleans;

//   for (const key in res) {
//     if (res[key].length < 1) delete res[key];
//   }

//   return res;
// };

// Codewar
// function separateTypes(input) {
//   return input.reduce((types, value) => {
//     const valueType = typeof value
//     const type = types[valueType]
//     types[valueType] = type ? [...type, value] : [value]
//     return types
//   }, {})
// }

// Test
// console.log(separateTypes(['a', 1, 2, false, 'b'])); // {number: [1, 2],  string: ['a']})
