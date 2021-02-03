'use strict';
/*
Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.
To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.
the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.
Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.
Given a seat number, your task is to return the seat location in the following format:
'2B' would return 'Front-Left'.
If the number is over 60, or the letter is not valid, return 'No Seat!!'.
*/

//* My solution:
const planeSeat = a => {
  // const letter = String(a.split('').slice(-1));
  const letter = a.slice(-1);
  const number = parseInt(a);

  const checkLetter = l => {
    if (l === 'A' || l === 'B' || l === 'C') return 'Left';
    else if (l === 'D' || l === 'E' || l === 'F') return 'Middle';
    else if (l === 'G' || l === 'H' || l === 'K') return 'Right';
    else return 'No Seat!!';
  };

  const checkNumber = n => {
    if (n <= 20) return 'Front-';
    else if (n >= 21 && n <= 40) return 'Middle-';
    else if (n >= 41 && n <= 60) return 'Back-';
    else if (n > 61) return 'No Seat!!';
  };

  if (checkNumber(number) === 'No Seat!!' || checkLetter(letter) == 'No Seat!!')
    return 'No Seat!!';

  if (
    checkNumber(number) !== 'No Seat!!' ||
    checkLetter(letter) !== 'No Seat!!'
  )
    return `${checkNumber(number)}${checkLetter(letter)}`;
};

// Codewars: But its does'n work if input will be '2P'
// function planeSeat(a) {
//   const number = parseInt(a);
//   const letter = a[a.length - 1];
//   if (number > 60 || letter == 'I' || letter == 'J') return 'No Seat!!';
//   return `${number > 20 ? (number > 40 ? 'Back-' : 'Middle-') : 'Front-'}${
//     letter > 'C' ? (letter > 'F' ? 'Right' : 'Middle') : 'Left'
//   }`;
// }

// console.log(planeSeat('2B')); //'Front-Left'
// console.log(planeSeat('20B')); //'Front-Left'
// console.log(planeSeat('22B')); //'Middle-Left'
// console.log(planeSeat('58I')); //'No Seat!!'
// console.log(planeSeat('64C')); //'No Seat!!'
