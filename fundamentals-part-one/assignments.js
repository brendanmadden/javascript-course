/*
// Notes

- It's the value, not the variable, that determines the data type.
- When you declare a variable but do not set a value, the variable is undefined, and the value is undefined. Ex:
let year;
year is an undefined variable type, and it's value is undefined.
- There is a legacy bug in the browser that defines typeof null as an object, but this is not correct.
- Use const as much as you can, unless you KNOW that you're going to change the variable value. 

- You can use conditional statements in template literals

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

const firstName = `Brendan`;
const lastName = `Madden`;

const templateLiteral = `Hi, I'm ${firstName} ${lastName}. I use back ticks for all of my strings.`;
console.log(templateLiteral);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is greater that John's BMI ${johnBMI}`);
} else {
  console.log(`John's BMI ${johnBMI} is greater than Mark's BMI ${markBMI}`);
}


Challenge 3

let dolphinsAvg = (96 + 108 + 89) / 3;
let koalasAvg = (88 + 91 + 110) / 3;

if (dolphinsAvg > koalasAvg) {
  console.log(`Dolphins Win!`);
} else if (koalasAvg > dolphinsAvg) {
  console.log(`Koala's Win!`);
} else {
  console.log(`It's a tie.`);
}


let dolphinsAvg = (97 + 112 + 101) / 3;
let koalasAvg = (109 + 95 + 123) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg > 100) {
  console.log(`Dolphins Win!`);
} else if (koalasAvg > dolphinsAvg && koalasAvg > 100) {
  console.log(`Koala's Win!`);
  console.log(koalasAvg);
} else {
  console.log(`It's a tie.`);
}



let dolphinsAvg = (97 + 112 + 101) / 3;
let koalasAvg = (109 + 95 + 106) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg > 100) {
  console.log(`Dolphins Win!`);
  console.log(dolphinsAvg);
} else if (koalasAvg > dolphinsAvg && koalasAvg > 100) {
  console.log(`Koala's Win!`);
  console.log(koalasAvg);
} else {
  console.log(`It's a tie.`);
  console.log(dolphinsAvg, koalasAvg);
}

*/
