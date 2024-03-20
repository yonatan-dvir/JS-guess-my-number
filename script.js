"use strict";

const randomNum = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // If the user clicked check but didn't guess a number, tell him to guess one.
  if (!guess) {
    document.querySelector(".message").textContent = "Please guess a number!";
  }

  // If the guess is too high
  else if (guess > randomNum) {
    document.querySelector(".message").textContent = "Too high! Try again.. ):";
  }

  // If the guess is too low
  else if (guess < randomNum) {
    document.querySelector(".message").textContent = "Too low! Try again.. ):";
  }

  // Else, the user succeed!
  else {
    document.querySelector(".message").textContent = "Correct! You did it (:";
    document.querySelector(".number").textContent = randomNum;
  }
});
