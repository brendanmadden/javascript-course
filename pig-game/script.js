"use strict";

// Selecting Elements
const score0Element = document.querySelector(`#score--0`);
const score1Element = document.getElementById(`score--1`); // notice you don'use the selector with getElementById
const current0Element = document.getElementById(`current--0`); // same thing here
const current1Element = document.getElementById(`current--1`); // and here
const diceElement = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

// Starting Conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add(`hidden`);

let currentScore = 0;

// Rolling Dice Functionality
btnRoll.addEventListener(`click`, function () {
  // 1. Generating Random Dice Roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display Dice
  diceElement.classList.remove(`hidden`);
  diceElement.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    current0Element.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next player
  }
});
