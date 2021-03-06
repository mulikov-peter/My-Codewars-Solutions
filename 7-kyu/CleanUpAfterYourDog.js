'use strict';
/*You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D
Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.
You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.
You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.
If you do, return 'Clean', else return 'Cr@p'.
Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.
For example:
x=
[[_,_,_,_,_,_]
[_,_,_,_,@,_]
[@,_,_,_,_,_]]
bags = 2, cap = 2
return --> 'Clean'
*/

// function crap(x, bags, cap) {
//   const cr = x.flatMap(el => {
//     return el.filter(el => {
//       if (el === '@') return el.length;
//       else if (el.includes('D')) return 'Dog';
//     });
//   });

//   if (cr.includes('D')) return 'Dog!!';
//   if (cr.length) if (cr.length > bags) return 'Cr@p';
//   if (cr.length === bags && bags === cap) {
//     return 'Clean';
//   } else return 'Cr@p';
// }

//========
function crap(x, bags, cap) {
  x.forEach(el => {
    return el.filter(el => {
      if (el === '@') return el;
      else if (el.includes('D')) return 'Dog';
    });
  });
}

// Codewar
// function crap(x, bags, cap){
//   let c = 0;
//   for (let el of x){
//     for (let elem of el){
//       if (elem === "@") c++;
//       if (elem === "D") return "Dog!!";
//     }
//   }
//   return c <= bags * cap? "Clean" : "Cr@p"
// }

// Codewar2
// function crap(x, bags, cap){
//   var yard = x.reduce( (a, b) => a.concat(b) );
//   return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p';
// }

// Test
// console.log(
//   crap(
//     [
//       ['_', '_', '_', '_'],
//       ['_', '_', '_', '@'],
//       ['_', '_', '@', '_'],
//     ],
//     2,
//     2
//   )
// ); // "Clean");
// console.log(
//   crap(
//     [
//       ['_', '_', '_', '_'],
//       ['_', '_', '_', '@'],
//       ['_', '_', '@', '_'],
//     ],
//     1,
//     1
//   )
// ); // "Cr@p");
// console.log(
//   crap(
//     [
//       ['_', '_'],
//       ['_', '@'],
//       ['D', '_'],
//     ],
//     2,
//     2
//   )
// ); // "Dog!!");
