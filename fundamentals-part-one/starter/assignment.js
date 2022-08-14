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



let language = `mandarin`;

switch (language) {
  case `english`:
    console.log(`3rd place`);
    break;
  case `chinese`:
  case `mandarin`:
    console.log(`MOST`);
}



// Coding Challenge #4

let bill = 5;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total is ${bill + tip}`
);



let x = 3;
let y = 4;

y = x;

console.log(y);

x = 7;

y = x;

console.log(y);



//Coding Challenge #5

const calcAvg = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const averageKoalas = calcAvg(65, 54, 500);
const averageDolphins = calcAvg(44, 23, 7100);

console.log(averageDolphins, averageKoalas);

const checkWinner = function (averageDolphins, averageKoalas) {
  if (averageDolphins >= averageKoalas * 2) {
    console.log(`Dolphins win with ${averageDolphins} points`);
  } else if (averageKoalas >= averageDolphins * 2) {
    console.log(`Koalas win with ${averageKoalas} points`);
  } else if (averageDolphins === averageKoalas) {
    console.log(`Tie`);
  } else {
    console.log(`No Winner`);
  }
};

checkWinner(averageDolphins, averageKoalas);



function describeCountry(country, population, capitalCity) {
  return `${country} has a population of ${population} and it's Capital City is ${capitalCity}.`;
}

const canada = describeCountry(`Canada`, 37700000, `Ottawa`);
const finland = describeCountry(`Finland`, 6000000, `Helsinki`);
console.log(canada);
console.log(finland);

//Function Declaration

function percentageOfWorld(population) {
  return (population / 7900000000) * 100;
}

const china = percentageOfWorld(1441000000);
const canada = percentageOfWorld(37700000);
const usa = percentageOfWorld(331000000);

console.log(china, canada, usa);


//Function Expression

const percentageOfWorld2 = function (population) {
  return (population / 7900000000) * 100;
};

const china2 = percentageOfWorld2(1441000000);
const canada2 = percentageOfWorld2(37700000);
const usa2 = percentageOfWorld2(331000000);

console.log(china2, canada2, usa2);

*/
