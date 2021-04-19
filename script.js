"use strict";

const calcSecretNumber = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = calcSecretNumber(),
  score = 20,
  highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else {
    score--;
    if (score > 0) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
    } else {
      displayMessage("😱 You lost the game!");
    }
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = calcSecretNumber();
  score = 20;

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
