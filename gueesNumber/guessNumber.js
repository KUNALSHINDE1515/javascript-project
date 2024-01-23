// console.log(Math.random() * 100);
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowerHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`pleae enter a valid number`);
  } else if (guess < 1) {
    alert(`plese enter the number more than 1 `);
  } else if (guess > 100) {
    alert(`plese enter a number less than 100 `);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      cleanUpGuess(guess);
      displayMessage(`Game Over  . random numberwas ${randomNumber}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is to low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is to High`);
  }
}

function cleanUpGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} ,`;
  numGuess++;
  remaning.innerHTML = `${11 - numGuess}`;
}

function displayMessage(msg) {
  lowerHigh.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaning.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
