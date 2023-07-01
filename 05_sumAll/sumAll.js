const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" || // asks if the statement is a number or is less than 0 then error.
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }
  let start = 0,
    end = 0; // if number 1 is smaller I want it to start and number 2 to end. To make sure the starting number is lower than the ending number.

  if (num1 < num2) {
    // need to make sure that start is smaller than end.
    start = num1;
    end = num2;
  } else {
    start = num2;
    end = num1;
  }
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum = sum + i; // creates a new value, now its equal to whatever it was plus i. It will loop around and keep adding to itself. Sum remembers what it is equal to because it is outside the loop.
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
