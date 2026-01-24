function rollDice() {
  let diceRoll = Math.floor(Math.random() * 6 + 1);
  document.querySelector('#dnumber').textContent = 'you rolled:' + diceRoll;
  if (diceRoll == 6) {
    document.querySelector('#result').textContent = 'You win';
    document.querySelector('#result').style.color = 'blue';
    document.querySelector('body').style.background = 'green';
    document.querySelector('#click').disabled = true;
  } else {
    document.querySelector('#result').textContent = 'Try again';
    document.querySelector('#result').style.color = 'red';
  }
}
function resetDice() {
  document.querySelector('#dnumber').innerText = '';
  document.querySelector('#result').textContent = '';
  document.querySelector('body').style.background =
    ' linear-gradient(135deg, #fbc2eb, #a6c1ee)';
}
