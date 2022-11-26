'use strict';
/*

*/
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
 
  if (!guess) {
    displayMessage('⛔ No Value!');
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? '📈 Too High!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === number) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
});
