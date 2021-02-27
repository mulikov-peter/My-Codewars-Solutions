'use strict';
/* Triangular number is the amount of points that can fill equilateral triangle.

Example: the number 6 is a triangular number because all sides of a triangle has the same amount of points.

alt text

Hint!
T(n) = n * (n + 1) / 2,
n - is the size of one side.
T(n) - is the triangular number.
Given a number 'T' from interval [1; 2147483646], find if it is triangular number or not. */

function isTriangular(num) {
  let res = null;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
    if (sum === num) {
      res = true;
    }
  }
  return res ? true : false;
}

// Test
// console.log(isTriangular(1)); // true, "Failed when t = 1");
// console.log(isTriangular(3)); // true, "Failed when t = 3");
// console.log(isTriangular(6)); // true, "Failed when t = 6");
// console.log(isTriangular(10)); // true, "Failed when t = 10");
// console.log(isTriangular(15)); // true, "Failed when t = 15");
// console.log(isTriangular(21)); // true, "Failed when t = 21");
// console.log(isTriangular(28)); // true, "Failed when t = 28");
// console.log(isTriangular(7));
// console.log(isTriangular(26));
// console.log(isTriangular(77));
