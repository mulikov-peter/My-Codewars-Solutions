'use strict';
/*
The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)

Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

Here is how the final refactored code would be used:
*/

//* My solution:
class Person {
  constructor(name) {
    this.name = name;
  }
  greet(friendName) {
    return `Hello ${friendName}, my name is ${this.name}`;
  }
}

// const joe = new Person('Joe');

// console.log(joe);
// console.log(joe.greet('Kate')); // should return 'Hello Kate, my name is Joe'
// console.log(joe.greet('Anna')); // should return 'Hello Kate, my name is Joe'
// console.log(joe.name); // should == 'Joe'
