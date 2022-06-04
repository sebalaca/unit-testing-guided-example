function sum(a, b) {
  a = (a) ? a : 0;
  b = (b) ? b : 0;
  return a + b;
}

function subtract(a, b) {
  a = (a) ? a : 0;
  b = (b) ? b : 0;
  return a - b;
}

function divide(a, b) {
  a = (a) ? a : IllegalArgumentException();
  b = (b) ? b : IllegalArgumentException();
  return a / b;
}

function multiply(a, b) {
  a = (a) ? a : 0;
  b = (b) ? b : 0;
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
