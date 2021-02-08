'use strict';
/*
Color Ghost
Create a class Ghost
Ghost objects are instantiated without any arguments.
Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated
ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

// class Ghost {
//   constructor() {
//     this.colors = ['white', 'yellow', 'purple', 'red'];
//   }
//   get color() {
//     return this.colors[Math.floor(Math.random() * this.colors.length)];
//   }
// }

// Solution 2:

class Ghost {
  constructor() {
    this.color = ['white', 'yellow', 'purple', 'red'][
      Math.floor(Math.random() * 4)
    ];
  }
}

// const ghost = new Ghost();

// console.log(ghost.color);
