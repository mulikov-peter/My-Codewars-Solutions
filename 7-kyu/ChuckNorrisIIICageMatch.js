'use strict';
/*
It's Friday night, and Chuck is bored. He's already run 1,000 miles, stopping only to eat a family sized bag of Heatwave Doritos and a large fistful of M&Ms. He just can't stop thinking about kicking something!

There is only one thing for it, Chuck heads down to his local MMA gym and immediately challenges every fighter there to get in the cage and try and take him down... AT THE SAME TIME!

You are provided an array of strings that represent the cage and Chuck's opponents. Your task, in traditional Chuck style, is to take their heads off!! Throw punches, kicks, headbutts (or more likely - regex or iteration...) but whatever you do, remove their heads. Return the same array of strings, but with the heads ('O') removed and replaced with a space (' ').

If the provided array is empty, or is an empty string, return 'Gym is empty'. If you are given an array of numbers, return 'This isn't the gym!!'.

FIGHT!!

Original design of this kata was a much more beautiful thing - the test cases illustrate the idea, and the intended output. I am unable to make the actual output go over multiple lines so for now at least you will have to imagine the beauty!
*/

// const headSmash = array => {
//   if (typeof array === 'number') return `This isn't the gym!!`;
//   else if (array.length < 1) return `Gym is empty`;
//   else {
//     return array.map(el => {
//       return el.replace(/O/g, ' ');
//     });
//   }
// };

// Codewar
// function headSmash(array) {
//   return /\d/.test(array) ? "This isn't the gym!!" : array.length==0 ? "Gym is empty" : array.map(x => x.replace(/O/g,' '));
// }

// function headSmash(arr) {
//   if ( arr.length === 0 ) return 'Gym is empty';
//   if ( typeof arr !== 'object' || arr === null ) return 'This isn\'t the gym!!';
//   return arr.map(el => el.replace(/[O]/g, ' '))
// }

// TEst
// console.log(
//   headSmash([
//     '*****************************************',
//     '**  _O_   *   _O_   *   _O_   *   _O_  **',
//     '** C(.)J  *  /(.)J  *  /(.)J  *  C(.)J **',
//     '** _/ |_  *  _| |_  *  _( )_  *  _/ )_ *',
//   ])
// );
