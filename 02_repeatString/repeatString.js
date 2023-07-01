// i - string and number.
// o - string the number of times specified
// e - if times entered is 0, or random
// const number = Math.floor(Math.random() * 1000); // we need to make a new variable to substitute for the old parameter in the fuction below.
const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let string = ""; // creates a variable to hold the string i am going to return
  for (i = 0; i < times; i++) {
    string += word; // the + adds to the next loop.
  }
  return string;
};
// console.log(repeatString("hey", number)); // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;
