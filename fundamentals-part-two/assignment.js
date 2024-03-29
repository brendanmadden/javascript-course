"use strict";

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


//JavaScript Fundamentals Part 2 Coding Challenge #1
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



//Arrow Function

const percentageOfWorld3 = (population) => (population / 7900000000) * 100;

const china3 = percentageOfWorld3(1441000000);
const canada3 = percentageOfWorld3(37700000);
const usa3 = percentageOfWorld3(331000000);

console.log(china3, canada3, usa3);



const percentageOfWorld3 = (population) => (population / 7900000000) * 100;

const describePopulation = function (country, population) {
  return `${country} has ${population} people which is about ${percentageOfWorld3(
    population
  )} percent of the worlds population`;
};

const china = describePopulation(`China`, 1441000000);
const canada = describePopulation(`Canada`, 37700000);
console.log(china);
console.log(canada);


const percentageOfWorld = (population) => (population / 7900000000) * 100;

const populations = [1441000000, 37700000, 331000000, 6000000];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];

console.log(percentages);

const neighbours = [`Canada`, `USA`, `Mexico`];

neighbours.push(`Utopia`);

console.log(neighbours);

neighbours.pop();

console.log(neighbours);

neighbours.includes(`Germany`)
  ? console.log(`Maybe a central European Country!`)
  : console.log(`Probably not in central Europe!`);

neighbours.push(`Germany`);

neighbours.includes(`Germany`)
  ? console.log(`Maybe a central European Country!`)
  : console.log(`Probably not in central Europe!`);

neighbours[1] = `United States`;

console.log(neighbours);

neighbours.pop();

console.log(neighbours);









// ********** JavaScript Fundamentals Part 2 Coding Challenge #2 **********

const tipCalc = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(tipCalc(100));
console.log(tipCalc(10));
console.log(tipCalc(500));

const bills = [125, 555, 44];

const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
const totals = [
  tipCalc(bills[0]) + bills[0],
  tipCalc(bills[1]) + bills[1],
  tipCalc(bills[2]) + bills[2],
];

console.log(bills);
console.log(tips);
console.log(totals);






const brendan = {
  firstName: `Brendan`,
  tipCalc: function tipCalc(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  },
  birthYear: 1991,
  // calcAge: function () {
  //   return 2022 - this.birthYear; // ********** one example of how *this* is used **********
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};
console.log(brendan.tipCalc(100));
console.log(brendan.calcAge());
console.log(brendan.age);
console.log(brendan);

// const interestedIn = prompt(
//  `What would you like to know? firstName, tipCalc, birthYear, or calcAge?`
// );

// console.log(brendan.interestedIn) wont work
// console.log(brendan[interestedIn]); will work because the expression will be calculated first in the square brackets
// alert(brendan[interestedIn]);



const jonas = {
  firstName: `Jonas`,
  job: `teacher`,
  hasDriversLicense: true,
  birthYear: 1991,

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job} who ${
      this.hasDriversLicense
        ? `has a drivers license.`
        : `does not have a license.`
    }`;
  },
};

console.log(jonas.getSummary());



//********** JavaScript Fundamentals Part 2 Coding Challenge #3 **********

const mark = {
  fullName: `Mark Marksman`,
  massKGS: 78,
  heightMTRS: 1.69,

  calcBMI: function () {
    this.BMI = this.massKGS / this.heightMTRS ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: `John Johnson`,
  massKGS: 92,
  heightMTRS: 1.95,

  calcBMI: function () {
    this.BMI = this.massKGS / this.heightMTRS ** 2;
    return this.BMI;
  },
};

console.log(mark.calcBMI(), john.calcBMI());

const results = `${mark.BMI > john.BMI ? `Mark` : `John`} has a higher BMI of ${
  mark.BMI > john.BMI ? mark.BMI : john.BMI
} than ${mark.BMI > john.BMI ? `John` : `Mark`} ${
  mark.BMI > john.BMI ? john.BMI : mark.BMI
}`;

console.log(results);
console.log(mark, john);



for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let line = `#`; line.length <= 10; line += `#`) {
  console.log(line);
}

let x = 3;

x += 5;

console.log(x);



const neighbours = [`Canada`, `USA`, `Mexico`];

for (let i = 0; i < neighbours.length; i++) {
  console.log(neighbours[i]);
}



for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    // break;
    continue;
  }

  console.log(i);
}


// ********** Loop inside of a loop **********

for (let exercise = 1; exercise <= 5; exercise++) {
  console.log(`------- STARTING EXERCISE ${exercise} -------`);

  for (let reps = 1; reps <= 5; reps++) {
    console.log(`         Completed Rep #${reps}`);
  }
}

// *******************************************


// ********** While Loop **********
let rep = 1;
while (rep <= 10) {
  console.log(rep);
  rep++;
}



//********** JavaScript Fundamentals Part 2 Coding Challenge #3 **********

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

let tipCalc = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(tipCalc(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

// ********** BONUS **********

const calcAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let avg = sum / arr.length;
  return avg;
};

console.log(Math.trunc(calcAvg(bills)));
console.log(Math.trunc(calcAvg(totals)));



const percentageOfWorld = (population) => (population / 7900000000) * 100;

const populations = [1441000000, 37700000, 331000000, 6000000];
const percentages = [];
// for (let i = 0; i < populations.length; i++) {
//   percentages.push(percentageOfWorld(populations[i]));
// }
let i = 0;
while (i < populations.length) {
  percentages.push(percentageOfWorld(populations[i]));
  i++;
}

console.log(percentages);

// const listOfNeighbours = [
//   [`Canada`, `Mexico`],
//   [`Spain`],
//   [`Norway`, `Sweden`, `Russia`],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++)
//   for (let j = 0; j < listOfNeighbours[i].length; j++)
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`); NOT SURE THIS SOLUTION IS ACCURATE

// Forecast Coding Challenge

const printForecast = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}*C in ${i + 1} days... `;
  }
  console.log("..." + str);
};

printForecast([24, 23, 27]);

*/
