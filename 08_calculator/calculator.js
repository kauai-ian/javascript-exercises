const add = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((a, b) => a + b, 0);
};

const multiply = function (...args) {
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
