'use strict';

//Selecting Element
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
//Rollig Dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    //Add dice roll to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //Switch Player
  }
});
