"use strict";

const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER DO THIS
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const brendan = new Person(`Brendan`, 1991);
console.log(brendan);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
const john = new Person(`john`, 2017);
const jill = new Person(`jill`, 1867);

console.log(john, jill);
console.log(brendan instanceof Person);
