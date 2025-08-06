let randomNum;

function setLevel(max) {
  randomNum = Math.floor(Math.random() * max) + 1;
  document.querySelector('.game').style.display = 'block';
}

function checkGuess() {
  guess = parseInt(document.getElementById('guessInput').value);
  msg = document.getElementById('message');

  if (guess === randomNum) {
    msg.textContent = "Correct! 🎉";
  } else if (guess < randomNum) {
    msg.textContent = "Too low!";
  } else {
    msg.textContent = "Too high!";
  }
}