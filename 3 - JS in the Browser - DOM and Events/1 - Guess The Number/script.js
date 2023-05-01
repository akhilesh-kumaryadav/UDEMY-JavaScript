'use strict';

const generateNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = generateNumber();
let score = 20;
let highScore = 0;
let guessLocator = document.querySelector('.guess');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setBgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const setHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessLocator.value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage(' No number !!!');
  } else if (guess === secretNumber) {
    displayMessage('🎊 Correct Number');
    setNumber(secretNumber);

    setBgColor('#60b347');
    setNumberWidth('30rem');

    if (highScore < score) {
      highScore = score;
      setHighScore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!!!' : 'Too low!!!');
      score--;
      setScore(score);
    } else {
      displayMessage('You lost the game 😢');
      setScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateNumber();

  displayMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  guessLocator.value = '';

  setBgColor('#222');
  setNumberWidth('15rem');
});
