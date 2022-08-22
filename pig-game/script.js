"use strict";

// Selecting Elements
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.querySelector(`#score--0`);
const score1Element = document.getElementById(`score--1`); // notice you don'use the selector with getElementById
const current0Element = document.getElementById(`current--0`); // same thing here
const current1Element = document.getElementById(`current--1`); // and here
const diceElement = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

// Starting Conditions
// score0Element.textContent = 0;
// score1Element.textContent = 0;
// diceElement.classList.add(`hidden`);

// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0Element.textContent = 0;
  current1Element.textContent = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;

  diceElement.classList.add(`hidden`);
  player0Element.classList.remove(`player--winner`);
  player1Element.classList.remove(`player--winner`);
  player1Element.classList.remove(`player--active`);
  player0Element.classList.add(`player--active`);
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle(`player--active`);
  player1Element.classList.toggle(`player--active`);
};

// Rolling Dice Functionality
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    // 1. Generating Random Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display Dice
    diceElement.classList.remove(`hidden`);
    diceElement.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0Element.classList.toggle(`player--active`);
      // player1Element.classList.toggle(`player--active`);
      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      playing = false;
      diceElement.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener(`click`, init); //{
// current0Element.textContent = 0;
// current1Element.textContent = 0;
// score0Element.textContent = 0;
// score1Element.textContent = 0;
// player0Element.classList.remove(`player--winner`);
// player1Element.classList.remove(`player--winner`);
// player1Element.classList.remove(`player--active`);
// player0Element.classList.add(`player--active`);
// playing = true;
// activePlayer = 0;
// currentScore = 0;
// scores = [0, 0];
// init();
//});
