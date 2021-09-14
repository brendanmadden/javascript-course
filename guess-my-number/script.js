"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // No input given
  if (!guess) {
    document.querySelector(".message").textContent = "Please enter a guess!";

    //   Correct Guess
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //    Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber
          ? "⬆️ Your guess is too high!"
          : "⬇️ Your guess is too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😭 You ran out of points!";
      document.querySelector(".score").textContent = 0;
    }
  }

  //   Guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent =
  //         "⬆️ Your guess is too high!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "😭 You ran out of points!";
  //       document.querySelector(".score").textContent = 0;
  //     }

  //     //   Guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent =
  //         "⬇️ Your guess is too low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "😭 You ran out of points!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
  // });

//   document.querySelector(".again").addEventListener("click", function () {
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;

//     document.querySelector(".message").textContent = "Start guessing...";
//     document.querySelector(".guess").value = "";
//     document.querySelector(".number").textContent = "?";
//     document.querySelector(".score").textContent = score;

//     document.querySelector("body").style.backgroundColor = "#222";
//     document.querySelector(".number").style.width = "15rem";
//   });
// });
