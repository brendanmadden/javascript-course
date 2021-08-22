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

*/

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
