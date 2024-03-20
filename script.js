"use strict";

// Generates a random nuber between 1 to 20
let randomNum = Math.trunc(Math.random() * 20) + 1;

// Initializes the game score to 20. The score decreases by 1 with each incorrect guess.
let score = 20;

// Initialize the highscore to 0.
let highscore = 0;

// add event listener to the check button
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // Prompt the user to input a valid number if the guess field is empty or 0.
  if (!guess) {
    document.querySelector(".message").textContent = "Please guess a number!";
  }

  // Inform the user that the guess is too high and decrement the score.
  else if (guess > randomNum) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Too high! Try again.. ):";
      document.querySelector(".score").textContent = --score;
    } else {
      document.querySelector(".message").textContent =
        "Too many guesses - you lost the game ):";
      document.querySelector(".score").textContent = --score;
    }
  }

  // Inform the user that the guess is too low and decrement the score.
  else if (guess < randomNum) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Too low! Try again.. ):";
      document.querySelector(".score").textContent = --score;
    } else {
      document.querySelector(".message").textContent = "You lost the game ):";
      document.querySelector(".score").textContent = --score;
    }
  }

  // Congratulate the user for the correct guess and reveal the number.
  else {
    document.querySelector(".message").textContent = "Correct! You did it (:";
    document.querySelector(".number").textContent = randomNum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

// Resets the game when user clicks the Again button
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});
