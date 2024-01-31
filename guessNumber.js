"use strict";
let randomNumber = Math.floor(Math.random() * 100) + 1;
document.querySelector(".guess-number").innerHTML = randomNumber;
let score = document.querySelector(".score span").textContent;

document.querySelector(".check-button").addEventListener("click", function () {
  const numberGuess = Number(
    document.querySelector(".input-value input").value
  );
  if (!numberGuess) {
    document.querySelector(".game-msg p").textContent =
      "You have not entered any number!";
  } else if (numberGuess === randomNumber) {
    document.querySelector(".game-msg p").textContent = "🏆Correct Number!";
    document.querySelector(".highscore span").textContent = score;
    document.querySelector(".game-container").style.backgroundImage =
      "url('BG.jpg')";
    document.querySelector(".game-container").style.backgroundSize = "contain";
  } else if (numberGuess > randomNumber) {
    document.querySelector(".game-msg p").textContent =
      "Guess number is too high!!";
    score--;
    document.querySelector(".score span").textContent = score;
  } else if (numberGuess < randomNumber) {
    document.querySelector(".game-msg p").textContent =
      "Guess number is too low!!";
    score--;
    document.querySelector(".score span").textContent = score;
  }
});
// Use the BG image for default
// Find a winning image for winning
// Find too high and too low image for the cases
