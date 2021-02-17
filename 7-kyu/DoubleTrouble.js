'strict mode';
/* Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.
*/

const trouble = (x, t) => {
  x.forEach((el, i) => {
    const index = x.findIndex((el, i) => el + x[i + 1] === t);
    // console.log(index);
    if (index > -1) {
      x.splice(index + 1, 1);
    }
    if (el + x[i + 1] === t) {
      x.splice(el);
    }
  });

  return x;
};

// Codewar 1
//  function trouble(x, t){
//   for(var i=0; i<x.length; i++) {
//     if(x[i]+x[i+1]===t) {
//       x.splice(i+1,1);
//       i--;
//     }
//   }

//   return x;
// }

// Codewar 2
// const trouble = (x, t) =>
//   x.reduce((pre, val) => val + pre[pre.length - 1] !== t ? [...pre, val] : pre, []);

// Test
// console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7)); // [1, 3, 5, 6, 7, 4]);
// console.log(trouble([4, 1, 1, 1, 4], 2)); // [4, 1, 4]);
// console.log(trouble([2, 2, 2, 2, 2, 2], 4)); // [2]);
// console.log(trouble([2, 6, 2], 8)); // [2, 2]);
