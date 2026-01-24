let secretNumber;
let max_number = 0;
let attempts = 0;
let gameOver = false;

const IsInRange = (secretNumber, guess) => {
  return Math.abs(secretNumber - guess) <= 2;
};

const easyBtn = document.querySelector('#easy');
const hardBtn = document.querySelector('#hard');
const guessInput = document.querySelector('#guess');
const checkBtn = document.querySelector('#checkBtn');
const message = document.querySelector('#message');
const attemptsText = document.querySelector('#attempts');

guessInput.disabled = true;
checkBtn.disabled = true;

const setDifficulty = (dif) => {
  gameOver = false;
  attempts = 0;
  attemptsText.textContent = 'Attempts: 0';

  max_number = dif === 'hard' ? 80 : 30;

  message.textContent = `Please select a number between 1 and ${max_number}`;

  guessInput.disabled = false;
  checkBtn.disabled = false;

  easyBtn.disabled = false;
  hardBtn.disabled = false;

  hardBtn.classList.toggle('active', dif === 'hard');
  easyBtn.classList.toggle('active', dif === 'easy');

  secretNumber = Math.floor(Math.random() * max_number + 1);
};

const checkGuess = () => {
  if (gameOver) return;

  const guess = parseInt(guessInput.value);
  if (!guess) return alert('please guess the number');
  if (guess > max_number || guess < 1) {
    message.textContent = `Please select between 1 and ${max_number}`;
    return;
  }

  attempts++;
  attemptsText.textContent = 'Attempts: ' + attempts;

  // Lock everything after first check
  easyBtn.disabled = true;
  hardBtn.disabled = true;
  checkBtn.disabled = true;

  if (guess === secretNumber) {
    gameOver = true;
    message.textContent = '🎉 Correct!';
    document.body.style.background = 'green';
    message.style.color = 'green';
    setTimeout(reset, 2000);
  } else if (IsInRange(secretNumber, guess)) {
    message.textContent = '🔥 Very close!';
    document.body.style.background = 'orange';
    message.style.color = 'orange';
  } else if (guess > secretNumber) {
    message.textContent = 'Too high!';
    message.style.color = 'red';
  } else {
    message.textContent = 'Too low!';
    message.style.color = 'red';
  }
};

checkBtn.addEventListener('click', checkGuess);

function reset() {
  gameOver = false;
  max_number = 0;
  attempts = 0;

  guessInput.value = '';
  guessInput.disabled = true;
  checkBtn.disabled = true;

  easyBtn.disabled = false;
  hardBtn.disabled = false;

  message.textContent = 'Please select the level to get started';
  message.style.color = 'black';
  attemptsText.textContent = 'Attempts: 0';

  document.body.style.background = 'lightgrey';

  easyBtn.classList.remove('active');
  hardBtn.classList.remove('active');
}
