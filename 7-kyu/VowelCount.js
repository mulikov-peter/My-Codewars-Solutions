'use strict';
/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

const getCount = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;

  [...str].forEach((l, i) =>
    vowels.forEach(el => (l === el ? (vowelsCount += 1) : vowelsCount))
  );
  return vowelsCount;
};

// Codewars

// const getCount = str => str.match(/[aeiou]/gi).length;

// const getCount = str => str.replace(/[^aeiou]/gi, '').length;

// console.log(getCount('abracadabra')); // 5
// console.log(getCount('code wars ')); // 3
