'use strict';
/* Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.

Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick.

Remember, only the process of change from wave to calm will add to the effect (really wave peak to trough but this will do). Find out how many changes in level the string has and if that figure is more than 20% of the array, return "Throw Up", if less, return "No Problem".
*/
function seaSick(x) {
  let w = 0;

  x.split('').forEach((el, i) => {
    if (el === '_' && x[i + 1] === '~') w++;
    else if (el === '~' && x[i + 1] === '_') w++;
  });

  if (w > (x.length * 20) / 100) return 'Throw Up';
  else return 'No Problem';
}

// Codewar 1
// function seaSick(x) {
//   var a = x.split('_~').length - 1;
//   var b = x.split('~_').length - 1;
//   return (a + b) / x.length > 0.2 ? 'Throw Up' : 'No Problem';
// }

// Codewar 2
// function seaSick(x) {
//   var count = 0;

//   x.split('').reduce(function (first, second) {
//     first != second ? ++count : count;
//     return second;
//   });

//   if ((count / x.length) * 100 > 20) {
//     return 'Throw Up';
//   }

//   return 'No Problem';
// }

// Test
// console.log(seaSick('~')); // "No Problem");
// console.log(seaSick('_~~~~~~~_~__~______~~__~~_~~')); // "Throw Up");
// console.log(seaSick('______~___~_')); // "Throw Up");
// console.log(seaSick('_~~'));
// console.log(seaSick('~~____')); //'No problem';
