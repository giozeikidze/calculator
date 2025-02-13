#!/usr/bin/env node
// file: calculator.js
const { add, subtract, times, divide, modulus } = require('./src/stmnts-01');
const { power } = require('./src/stmnts-02');

if (process.argv.length < 5) {
  console.error("usage: node calculator.js number operator number");
  process.exit(1);
}

const num1 = parseFloat(process.argv[2]);
const operation = (process.argv[3]).toLowerCase();
const num2 = parseFloat(process.argv[4]);

let result = `Solving ${num1} ${operation} ${num2}`;

// Implementation goes here
// if you get an error, exit with an error of 1 by calling process.exit(1);

if (isNaN(num1) || isNaN(num2)) {
  console.error("Error: invalid number");
  process.exit(1);
}

// Perform operation
if (operation === "add" || operation === "+") {
  result = add(num1, num2);
} else if (operation === "subtract" || operation === "-") {
  result = subtract(num1, num2);
} else if (operation === "multiply" || operation === "times" || operation === "*") {
  result = times(num1, num2);
} else if (operation === "divide" || operation === "/") {
  if (num2 === 0) {
    console.error("Error: invalid number (division by zero)");
    process.exit(1);
  }
  result = divide(num1, num2);
} else if (operation === "modulus" || operation === "remainder" || operation === "%") {
  if (num2 === 0) {
    console.error("Error: invalid number (modulus by zero)");
    process.exit(1);
  }
  result = modulus(num1, num2);
} else if (operation === "power" || operation === "^") {
  result = power(num1, num2);
} else {
  console.error("unknown operation");
  process.exit(1);
}


console.log("result: ", result);
process.exit(0);
