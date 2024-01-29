"use strict";

document.querySelector(".check-button").addEventListener("click", function () {
  document.querySelector(".game-msg p").textContent = "🏆Correct Number!";
  document.querySelector(".score span").textContent = 10;
  document.querySelector(".input-value input").value = 23;
});

let randomNumber = Math.floor(Math.random() * 100) + 1;
document.querySelector(".guess-number").innerHTML = randomNumber;

let checkNumber = document.querySelector(".check-button");

const inputNumber = () => {};
