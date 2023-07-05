"use strict";
//Elements
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const currScore0 = document.querySelector("#current--0");
const currScore1 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

//variables;
let currScore, playing, scores, currPlayer, scoreA, scoreB;

//initial Conditions
const init = function () {
  playing = true;
  currPlayer = 0;
  currScore = 0;
  scores = [0, 0];
  currScore0.textContent = 0;
  currScore1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  dice.classList.add("hidden");
};
init();
const switchPlayer = function () {
  currScore = 0;
  document.querySelector(`#current--${currPlayer}`).textContent = 0;
  currPlayer = currPlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

//Roll dice Functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    let rollNum = Math.trunc(Math.random() * 6) + 1;

    //Display Dice_roll
    dice.classList.remove("hidden");
    dice.src = `dice-${rollNum}.png`;

    if (rollNum != 1) {
      currScore += rollNum;
      document.querySelector(`#current--${currPlayer}`).textContent = currScore;
    } else {
      switchPlayer();
    }
  }
});

//Hold Button Functionality
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[currPlayer] += currScore;
    document.getElementById(`score--${currPlayer}`).textContent =
      scores[currPlayer];

    if (scores[currPlayer] >= 200) {
      document.querySelector(`#score--${currPlayer}`).textContent =
        scores[currPlayer];
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${currPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${currPlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", init);
