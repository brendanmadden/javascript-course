"use strict";

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

console.log(addDeclaration(2, 3));
// console.log(addExpression(2, 3)); // Will throw reference error cannot access before initialization
// console.log(addArrow(2, 3)); // Will throw reference error cannot access before initialization

function addDeclaration(a, b) {
  return a + b;
}

let addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
