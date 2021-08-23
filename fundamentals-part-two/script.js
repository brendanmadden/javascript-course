"use strict";

/*
// function declaration

function myName() {
  console.log(`Brendan Madden`);
}

// function expression

const newName = function (name) {
  console.log(name);
};

myName();
newName("Brendan");



let calcAvg = (one, two, three) => (one + two + three) / 3;

let dolphinsAvg = calcAvg(144, 123, 171);
let koalasAvg = calcAvg(65, 54, 49);

let checkWinner = (koalasAvg, dolphinsAvg) => {
  if (koalasAvg >= dolphinsAvg * 2) {
    console.log(`Koalas win! Koalas: ${koalasAvg} Dolphins: ${dolphinsAvg}`);
    return koalasAvg;
  } else if (dolphinsAvg >= koalasAvg * 2) {
    console.log(`Dolphins win! Koalas: ${koalasAvg} Dolphins: ${dolphinsAvg}`);
    return dolphinsAvg;
  } else {
    console.log(`Both teams win. Congratulations.`);
    return -1;
  }
};

checkWinner(koalasAvg, dolphinsAvg);

Some Useful Array Methods
- shift
- unshift
- pop
- push
- indexOf
- includes



const calcTip = (bill) => (bill > 300 || bill < 50 ? bill * 0.2 : bill * 0.15);

let bills = [125, 555, 44];

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

let total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(tips, total);



const brendan = {
  firstName: "Brendan",
  lastName: "Madden",
  birthYear: 1991,
  job: "frontend",
  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
};

console.log(brendan.calcAge());


const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(
  `John's BMI (${john.calcBMI()}) is ${
    john.calcBMI() > mark.calcBMI() ? "higher" : "lower"
  } than Mark's BMI (${mark.calcBMI()})`
);


use the continue keyword to skip an iteration in a loop



const brendan = ["Brendan", "Madden", 1991, "frontend"];

for (let i = 0; i < brendan.length; i++) {
  if (typeof brendan[i] !== "string") continue;
  console.log(brendan[i], typeof brendan[i]);
}

break will terminate the loop once the value is found



const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = (bill) => (bill > 300 || bill < 50 ? bill * 0.2 : bill * 0.15);

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(totals, tips);

*/
