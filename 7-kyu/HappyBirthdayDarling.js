'use strict';
/* As you may know, once some people pass their teens, they jokingly only celebrate their 20th or 21st birthday, forever. With some maths skills, that's totally possible - you only need to select the correct number base!

For example, if they turn 32, that's exactly 20 - in base 16... Already 39? That's just 21, in base 19!

Your task is to translate the given age to the much desired 20 (or 21) years, and indicate the number base, in the format specified below.

Note: input will be always > 21

Examples:
32  -->  "32? That's just 20, in base 16!"
39  -->  "39? That's just 21, in base 19!"
*/
//

function womensAge(n) {
  const base = (n / 20).toString().replace('.', '');
  if (base.length === 1) return `${n}? That's just 20, in base ${base}0!`;

  return base.length === 2
    ? `${n}? That's just 20, in base ${base}!`
    : `${n}? That's just ${21}, in base ${base.slice(0, 2)}!`;
}

// Codewar
// function womensAge(n) {
//   return `${n}? That's just ${20 + (n % 2)}, in base ${Math.floor(n / 2)}!`;
// }

// function womensAge(n) {
//   const age = n % 2 == 0 ? 20 : 21;
//   return `${n}? That's just ${age}, in base ${Math.floor(n / 2)}!`;
// }

// Test
// console.log(womensAge(32)); // "32? That's just 20, in base 16!");
// console.log(womensAge(39)); // "s39? That's just 21, in base 19!");
// console.log(womensAge(22)); // "22? That's just 20, in base 11!");
// console.log(womensAge(65)); // "65? That's just 21, in base 32!");
// console.log(womensAge(83)); // "83? That's just 21, in base 41!");
// console.log(womensAge(35)); //
// console.log(womensAge(60)); //
