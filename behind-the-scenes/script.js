"use strict";
/*
// function calcAge(birthYear) {
//   let age = 2022 - birthYear;
//   return age;
// }

// console.log(calcAge(1991));
// console.log(age) // Will throw error - can go up in scope, not down in scope

console.log(me); // Will show undefined as var is hoisted
// console.log(job); // Will throw reference error cannot access before initialization
// console.log(year); // Will throw reference error cannot access before initialization

var me = `Brendan`;
let job = `Account Executive`;
const year = 1991;

console.log(addDeclaration(2, 3)); // Only Function Declarations can be called before initialization
// console.log(addExpression(2, 3)); // Will throw reference error cannot access before initialization
// console.log(addArrow(2, 3)); // Will throw reference error cannot access before initialization

function addDeclaration(a, b) {
  return a + b;
}

let addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
// const addArrow = (a, b) => {
//   return a + b; // don't need these curly braces or 'return' for one liners
// };
console.log(addArrow(6, 3));

// THIS KEYWORD

console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcArrow = (birthYear) => {
  console.log(2022 - birthYear);
  console.log(this); // arrow functions do not get a this keyword - here, this will point to the Window object (global object)  because it will be inherited from the outer scope - global in this case
};
calcArrow(1991);



const BRENDAN = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
BRENDAN.calcAge(); // the reason that the this keyword points to BRENDAN here is because it's BRENDAN that's calling the method.

const MATILDA = {
  year: 2017,
};

MATILDA.calcAge = BRENDAN.calcAge; // METHOD BORROWING

MATILDA.calcAge(); // this now points to MATILDA when this is called

const f = BRENDAN.calcAge;
f(); // will throw an error undefined as inside of a regular JavaScript function, this value (aka the execution context) is dynamic. The dynamic context means that the value of this depends on how the function is invoked. In JavaScript, there are 4 ways you can invoke a regular function. During a simple invocation the value of this equals to the global object (or undefined if the function runs in strict mode).

*/

const BRENDAN = {
  firstName: `Brendan`,
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);

    //Solution 1
    // const self = this;
    // console.log(self);
    // const isMillenial = function () {
    //   //   console.log(this.year >= 1981 && this.year <= 1996); // this doesn't work because functions dont get a this in strict mode
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996); // using an arrow function solves the above problem because it inherits the parent scope's this keyword
    };

    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`), // probably best not to ever use arrow functions for methods
};
BRENDAN.calcAge();
BRENDAN.greet();

// arguments keyword
const addExpression = function (a, b) {
  console.log(arguments); // arguments keyword does not exist in arrow functions
  return a + b;
};
console.log(addExpression(2, 5));
console.log(addExpression(2, 5, 9, 18, 10));
