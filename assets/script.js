"use strict";

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".submit").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("🤬 No number!");
  } else if (guess === secretNumber) {
    displayMessage("👽 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "40rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "📈 Far form True!" : "📉 Near to True!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".retry").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 50) + 1;

  displayMessage("Start Playing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "!!";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#fff";
  document.querySelector(".number").style.width = "15rem";
});
