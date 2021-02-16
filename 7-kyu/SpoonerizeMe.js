'use strict';
/* A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example.

NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.
*/

// 1 variante:
// console.log(
//   passenger.slice(0, 1).toUpperCase() + passenger.slice(1).toLowerCase()
// );

// 2 variante:
// console.log(passenger[0].toUpperCase() + passenger.slice(1).toLowerCase());

const spoonerize = words => {
  words = words.split(' ');
  const firstWord = words[0];
  const secondWord = words[1];

  const firstLet = firstWord.slice(0, 1);
  const secondLet = secondWord.slice(0, 1);

  words = `${secondLet}${firstWord.slice(1)} ${firstLet}${secondWord.slice(1)}`;
  return words;
};

// Codewar
// function spoonerize(words) {
//   let word = words.split(' ')
//   return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(' ')
// }

// function spoonerize(words) {
//   let word = words.split(' ')
//   return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(' ')
// }

// Test
// console.log(spoonerize('nit picking')); // "pit nicking")
// console.log(spoonerize('wedding bells')); // "bedding wells")
// console.log(spoonerize('jelly beans')); // "belly jeans")
