const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  const fib = [0, 1];
  for (let i = 1; i < n; i++) {
    fibSum = fib[i] + fib[i - 1];
    fib.push(fibSum);
  }
  console.log(fib);
  return fib[n];

  // add two numbers together, the last two that is.
  // create an empty array to hold the running sequence.
  // create a function that takes a,b and returns the sum of the last two numbers
  // add the two numbers to the array
  // return the index of the array
};

// Do not edit below this line
module.exports = fibonacci;
