'use strict';

/*
I don't like writing classes like this:

function Animal(name,species,age,health,weight,color) {
  this.name = name;
  this.species = species;
  this.age = age;
  this.health = health;
  this.weight = weight;
  this.color = color;
}
Give me the power to create a similar class like this:
const Animal = makeClass("name","species","age","health","weight","color") 
*/

//* My solution:

const makeClass = function (...options) {
  return class {
    constructor(...values) {
      options.forEach((key, i) => {
        this[key] = values[i];
      });
    }
  };
};

// const Animal = makeClass('name', 'species', 'age');
// console.log(Animal);

// const dog = new Animal('Bob', 'Dog', '5');
// console.log(dog);
