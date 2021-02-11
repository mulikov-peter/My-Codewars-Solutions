'use strict';
/*
Define a method/function that removes from a given array of integers all the values contained in a second array.
Examples:
l = List()
integer_list =  [1, 1, 2 ,3 ,1 ,2 ,3 ,4]
values_list = [1, 3]
l.remove_(integer_list, values_list) == [2, 2, 4]
*/

// My solution
Array.prototype.remove_ = function (integer_list, values_list) {
  if (integer_list.length > 1) {
    const unique = [...integer_list, ...values_list].reduce(
      (acc, cur) =>
        acc.concat(
          (integer_list.includes(cur) && values_list.includes(cur)) ||
            (!integer_list.includes(cur) && values_list.includes(cur))
            ? []
            : cur
        ),
      []
    );
    return unique;
  } else return [];
};

// Codewar 1
// Array.prototype.remove_ = function(integer_list, values_list){
//   return integer_list.filter(function (element) {
//     return values_list.indexOf(element) === -1;
//   });
// }

// Codewar 2
// Array.prototype.remove_ = (x, y) => x.filter(e => !y.includes(e));

// const l = new Array();
// Test 1
// const integer_list = [1, 2, 3, 1, 2, 3, 4];
// const values_list = [1, 3, 7];

// Test 2
// const integer_list = [];
// const values_list = [2, 2, 4, 3];

// console.log(l.remove_(integer_list, values_list));
