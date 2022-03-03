'use strict';

// Generating Random number
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Handling no input
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!'
    document.querySelector('.number').textContent = secretNumber;

    // 1 Select the body of the page - element that we want to manipulate
    document.querySelector('body').style.backgroundColor = '#60b347';

    // 2 Select and Manipulate the width's number
    document.querySelector('.number').style.width = '30rem';

    // Implementing HIghscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When Gues is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score = score - 1;
      document.querySelector('.score').textContent = score;  
    } else {
      document.querySelector('.message').textContent = 'You lost the game'
      document.querySelector('.score').textContent = 0;  

    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score = score - 1;
      document.querySelector('.score').textContent = score;  
    } else {
      document.querySelector('.message').textContent = 'You lost the game'
      document.querySelector('.score').textContent = 0;  

    }

    // document.querySelector('.message').textContent = 'Too Low';
    // score = score - 1;
    // document.querySelector('.score').textContent = score;
  }
});

// Implementing the Reset button
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  
})

// Implementing High Score