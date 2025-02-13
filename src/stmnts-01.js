function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function times(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) throw new Error("Error: invalid number (division by zero)");
  return num1 / num2;
}

function modulus(num1, num2) {
  if (num2 === 0) throw new Error("Error: invalid number (modulus by zero)");
  return num1 % num2;
}

module.exports = { add, subtract, times, divide, modulus };
