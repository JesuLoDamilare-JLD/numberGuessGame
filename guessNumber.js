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
    let containers = document.querySelectorAll(
      ".guess-number, .input-value input, .check-button"
    );
    containers.forEach(function (container) {
      container.style.opacity = "0.1";
    });
    let coinImg = document.querySelectorAll(".coin-img2, .coin-img1");
    coinImg.forEach(function (coin) {
      coin.style.display = "none";
    });
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
  if (score < 0) {
    document.querySelector(".game-msg p").textContent =
      "Please click on the TRY-AGAIN image above to start over.";
    document.querySelector(".score span").textContent = 0;
    document.querySelector(".game-container").style.backgroundImage =
      "url('youlost.png')";
    document.querySelector(".game-container").style.backgroundSize = "cover";
    document.querySelector(".game-container").style.backgroundRepeat =
      "no-repeat";
    let containers = document.querySelectorAll(
      ".guess-number, .input-value input, .check-button"
    );
    containers.forEach(function (container) {
      container.style.opacity = "0.1";
    });
    let coinImg = document.querySelectorAll(".coin-img2, .coin-img1");
    coinImg.forEach(function (coin) {
      coin.style.display = "none";
    });
  }
});

document.querySelector(".try-again img").addEventListener("click", function () {
  document.querySelector(".game-msg p").textContent = "Start guessing.....";
  document.querySelector(".highscore span").textContent = 0;
  document.querySelector(".game-container").style.backgroundImage =
    "url('BG.jpg')";
  document.querySelector(".game-container").style.backgroundSize = "contain";
  document.querySelector(".game-container").style.backgroundRepeat = "repeat";
  let elements = document.querySelectorAll(
    ".game-msg p, .score p, .score span, .highscore p, .highscore span"
  );
  elements.forEach(function (element) {
    element.style.color = "#000";
  });
  let containers = document.querySelectorAll(
    ".guess-number, .input-value input, .check-button"
  );
  containers.forEach(function (container) {
    container.style.opacity = "1";
  });
  let coinImg = document.querySelectorAll(".coin-img2, .coin-img1");
  coinImg.forEach(function (coin) {
    coin.style.display = "block";
  });
  document.querySelector(".score span").textContent = 20;
});
/* 
reset random
reset score tostart from 20 when not lost or won but clicked reset
*/
