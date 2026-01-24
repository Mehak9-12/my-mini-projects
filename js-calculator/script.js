const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let first = null;
let operator = null;
let second = null;
let shouldReset = false; // Flag to clear display after an "=" result
function calculate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      return b === 0 ? 'Cannot divide by 0' : a / b;
      break;
    case '%':
      if (b === 0) return 'Error';
      result = a % b;
      break;
    case '^':
      result = Math.pow(a, b); // power:a-base b-exponent
      break;
    case '√':
      if (a < 0) return 'Error';
      result = Math.sqrt(a);
      break;
    default:
      return 'Error';
  }
  return result;
}
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const numValue = btn.getAttribute('data-num');
    const opValue = btn.getAttribute('data-op');

    // 1. NUMBERS
    if (numValue !== null) {
      if (shouldReset) {
        first = numValue;
        shouldReset = false;
      } else {
        if (!operator) {
          first = first === null ? numValue : first + numValue;
        } else {
          second = second === null ? numValue : second + numValue;
        }
      }
      updateDisplay();
    }

    // 2. HANDLE OPERATORS
    if (btn.classList.contains('operator')) {
      if (first === null) return; // Don't start with an operator

      // Immediate calculation for Square Root
      if (opValue === '√') {
        first = calculate(first, null, '√').toString();
        operator = null;
        second = null;
        updateDisplay();
        return;
      }

      // Chaining Logic: if user types 5 + 5 and then presses '+',
      // calculate the first 10 immediately and prepare for the next number.
      if (first !== null && operator !== null && second !== null) {
        first = calculate(first, second, operator).toString();
        second = null;
      }

      operator = opValue;
      shouldReset = false;
      updateDisplay();
    }

    // 3. HANDLE EQUALS
    if (btn.id === 'equals') {
      if (first !== null && operator !== null && second !== null) {
        const result = calculate(first, second, operator);
        display.value = result;
        first = result.toString();
        operator = null;
        second = null;
        shouldReset = true; // Next number typed will clear the screen
      }
    }

    // 4. HANDLE CLEAR
    if (btn.id === 'clear') {
      first = null;
      second = null;
      operator = null;
      shouldReset = false;
      display.value = '0';
    }
  });
});

function updateDisplay() {
  // Shows the full equation or just '0' if empty
  let output = first || '0';
  if (operator) output += ` ${operator} `;
  if (second) output += second;
  display.value = output;
}
