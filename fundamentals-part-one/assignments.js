/*
// Notes

- It's the value, not the variable, that determines the data type.
- When you declare a variable but do not set a value, the variable is undefined, and the value is undefined. Ex:
let year;
year is an undefined variable type, and it's value is undefined.
- There is a legacy bug in the browser that defines typeof null as an object, but this is not correct.
- Use const as much as you can, unless you KNOW that you're going to change the variable value. 

// Assignments

let country = "Canada";
let continent = "North America";
let population = 37500000;

console.log(country);
console.log(continent);
console.log(population);

let x = true;

console.log(typeof x);

let markMass = 78;
let markHeight = 1.69;
let markBMI = markMass / markHeight ** 2;

let johnMass = 92;
let johnHeight = 1.95;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

markMass = 95;
markHeight = 1.88;
johnBMI = johnMass / johnHeight ** 2;
johnMass = 85;
johnHeight = 1.76;
johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
*/
