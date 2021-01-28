'use strict';

// SELECTING ELEMENTS
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// STARTING CONDITIONS

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  diceEL.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

// ROLING DICE FUNCTIONALITY
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. GENERATING A RANDOM DICE ROLL
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. DISPLAY DICE
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    // 3. CHECK FOR ROLLED 1: IF TRUE,
    if (dice !== 1) {
      // ADD DICE TO CURRENT SCORE
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;

      // current0EL.textContent = currentScore; //CHANGE LATER
    } else {
      //SWITCH TO NEXT PLAYER
      switchPlayer();
    }
  }
});

// HOLD FUNCTIONALITY
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add currenct score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEL.classList.add('hidden');
    } else {
      switchPlayer();
    }
    //3. Switch to the other player
  }
});

// RESET GAME FUNCTIONALITY
btnNew.addEventListener('click', init);
