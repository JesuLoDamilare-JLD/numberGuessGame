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
      "You have not entered any number!🙀";
    document.querySelector(".coin-img2").style.display = "none";
  } else if (numberGuess === randomNumber) {
    document.querySelector(".game-msg p").textContent = "🏆Correct Number!";
    document.querySelector(".highscore span").textContent = score;
    document.querySelector(".game-container").style.backgroundImage =
      "url('youwin.jpeg')";
    document.querySelector(".game-container").style.backgroundSize = "cover";
    document.querySelector(".game-container").style.backgroundRepeat =
      "no-repeat";
    let elements = document.querySelectorAll(
      ".game-msg p, .score p, .score span, .highscore p, .highscore span"
    );
    elements.forEach(function (element) {
      element.style.color = "blue";
    });
    document.querySelector(".coin-img2").style.display = "none";
  } else if (numberGuess > randomNumber) {
    document.querySelector(".game-msg p").textContent =
      "Guess number is too high!!🔼";
    score--;
    document.querySelector(".score span").textContent = score;
    document.querySelector(".coin-img2").style.display = "none";
  } else if (numberGuess < randomNumber) {
    document.querySelector(".game-msg p").textContent =
      "Guess number is too low!!⏬";
    score--;
    document.querySelector(".score span").textContent = score;
    document.querySelector(".coin-img2").style.display = "none";
  }
});
/* 
over mouse click
try again
clean the code
*/
