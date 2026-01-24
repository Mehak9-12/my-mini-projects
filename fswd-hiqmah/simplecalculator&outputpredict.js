function calculate(a, b, operator) {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      console.log(result);
      break;
    case '-':
      result = a - b;
      console.log(result);
      break;
    case '*':
      result = a * b;
      console.log(result);
      break;
    case '/':
      if (b !== 0) {
        result = a / b;
        console.log(result);
      } else console.log('Error: Division by zero!');
      break;
    default:
      console.log('Invalid operator!');
  }
}
calculate(10, 5, '+');
calculate(10, 5, '-');
calculate(10, 5, '*');
calculate(10, 5, '/');
calculate(10, 0, '/');
// Explain the output
let a = 10; //global

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c); //10,20,30
  }

  inner();
}

outer();
console.log(typeof c); //undefined because c is not global
