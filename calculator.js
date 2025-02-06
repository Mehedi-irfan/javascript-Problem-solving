function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculator(a, b, operation) {
  if (operation == "add") {
    return add(a, b);
  } else if (operation == "subtract") {
    return subtract(a, b);
  } else if (operation == "multiply") {
    return multiply(a, b);
  } else if (operation == "divide") {
    return divide(a, b);
  } else {
    return `This function can be done 'add', 'subtract', 'multiply', 'divide';`;
  }
}

const value = calculator(9, 8, "divide");
console.log(value);
