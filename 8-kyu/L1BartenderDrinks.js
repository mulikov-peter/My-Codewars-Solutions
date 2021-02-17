'use strict';
/* Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/
const getDrinkByProfession = param => {
  const inputs = [
    'Jabroni',
    'School Counselor',
    'Programmer',
    'Bike Gang Member',
    'Politician',
    'Rapper',
  ];

  const outputs = [
    'Patron Tequila',
    'Anything with Alcohol',
    'Hipster Craft Beer',
    'Moonshine',
    'Your tax dollars',
    'Cristal',
  ];

  const str = param
    .toLowerCase()
    .split(' ')
    .map(el => el[0].toUpperCase() + el.slice(1))
    .join(' ');

  const index = inputs.indexOf(str);

  if (index > -1) return outputs[index];
  else return 'Beer';
};

// Codewar
// const drinks = {
//   "jabroni": "Patron Tequila",
//   "school counselor": "Anything with Alcohol",
//   "programmer": "Hipster Craft Beer",
//   "bike gang member": "Moonshine",
//   "politician": "Your tax dollars",
//   "rapper": "Cristal"
// }

// const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"

// Test
// console.log(getDrinkByProfession('jabrOni')); // "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
// console.log(getDrinkByProfession('scHOOl counselor')); // "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
// console.log(getDrinkByProfession("prOgramMer")) // "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
// console.log(getDrinkByProfession("bike ganG member")) // "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
// console.log(getDrinkByProfession("poLiTiCian")) // "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
// console.log(getDrinkByProfession("rapper")) // "Cristal", "'Rapper' should map to 'Cristal'");
// console.log(getDrinkByProfession("pundit")) // "Beer", "'Pundit' should map to 'Beer'");
// console.log(getDrinkByProfession('Pug')); // "Beer", "'Pug' should map to 'Beer'");
