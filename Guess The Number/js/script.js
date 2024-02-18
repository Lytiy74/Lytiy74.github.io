"use strict";
let randomSecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const userInput = Number(document.querySelector(".guess").value);
  // When there is no number
  if (!userInput) {
    document.querySelector(".message").textContent = "🚫 No number!";
    // When player wins
  } else if (userInput === randomSecretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = randomSecretNumber;
    highScore = score > highScore ? score : highScore;
    document.querySelector(".highscore").textContent = highScore;
  }
  if (score > 0) {
    // When the guess is wrong
    if (userInput !== randomSecretNumber) {
      displayMessage(
        userInput > randomSecretNumber ? "📈 Too high!" : "📉 Too low!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessage("💥 You lost the game!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomSecretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
});
