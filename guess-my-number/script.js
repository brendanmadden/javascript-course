"use strict";

// document.querySelector('.message');
// document.querySelector('.message').textContent;

// document.querySelector(".message").textContent = `🎉 Correct Number!`;
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// // document.querySelector(`.guess`).value ** with an input field, we use the value propertie to obtain the content
// document.querySelector(`.guess`).value = 23;

// *** Handling Click Events ***

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = `😩 No Number Chosen!`;

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = `🎉 Woo! Great Guess!`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `⬇️ Oops! Too High!`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(
        ".message"
      ).textContent = `😢 Oh No! You Lost 😭😫`;
      document.querySelector(".score").textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `⬆️ Oops! Too Low!`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(
        ".message"
      ).textContent = `😢 Oh No! You Lost 😭😫`;
      document.querySelector(".score").textContent = 0;
    }
  }
});
