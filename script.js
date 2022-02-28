'use strict';

// Generating Random number
const number = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
// Handling no input
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
});
