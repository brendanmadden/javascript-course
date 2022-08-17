"use strict";

// document.querySelector('.message');
// document.querySelector('.message').textContent;

// document.querySelector(".message").textContent = `🎉 Correct Number!`;
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// // document.querySelector(`.guess`).value ** with an input field, we use the value propertie to obtain the content
// document.querySelector(`.guess`).value = 23;

// *** Handling Click Events ***

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message; // this is a function to help keep code DRY
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    displayMessage(`😩 No Number Chosen!`);

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Woo! Great Guess!`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`; // Manipulating css styles - notice camel case name
    document.querySelector(`.number`).style.width = `30rem`; // Manipulating css styles - use quotes where needed

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? `⬇️ Oops! Too High!` : `⬆️ Oops! Too Low!`
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(
        ".message"
      ).textContent = `😢 Oh No! You Lost 😭😫`;
      document.querySelector(".score").textContent = 0;
    }
  }

  // when guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = `⬇️ Oops! Too High!`;
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(
  //         ".message"
  //       ).textContent = `😢 Oh No! You Lost 😭😫`;
  //       document.querySelector(".score").textContent = 0;
  //     }

  //     // when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(`.message`).textContent = `⬆️ Oops! Too Low!`;
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(
  //         ".message"
  //       ).textContent = `😢 Oh No! You Lost 😭😫`;
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = `Start Guessing...`;
  document.querySelector(".score").textContent = score;
  document.querySelector(`.guess`).value = "";
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
});
