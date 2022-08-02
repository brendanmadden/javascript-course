/*

const country = "Canada";
const continent = "North America";
let population = 37500000;

// alert("continent");

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "English";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);



let markMass = 78;
let markHeight = 1.69;
let markBMI = markMass / markHeight ** 2;
let johnMass = 92;
let johnHeight = 1.95;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI, markBMI, johnBMI);

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI of ${markBMI} is higher than John's BMI of ${johnBMI}`
  );
} else {
  console.log(`John's BMI of ${johnBMI} is higher than Mark's`);
}

*/

// Coding Challenge #3

let avgDolphins = (96 + 108 + 89) / 3;
let avgKoalas = (88 + 91 + 110) / 3;

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log(`Dolphins Win!`);
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
  console.log(`Koalas Win!`);
} else if (
  avgDolphins === avgKoalas &&
  avgDolphins >= 100 &&
  avgKoalas >= 100
) {
  console.log(`It's a tie!`);
} else {
  console.log(`Nobody wins because the avg score is below 100`);
}
