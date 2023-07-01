// create a variable that will hold farenheight value.

const convertToCelsius = function (fahrenheightNum) {
  let celciusValue = (fahrenheightNum - 32) * (5 / 9);
  let celciusRounded = Math.round(celciusValue * 10) / 10;
  return celciusRounded;
};

const convertToFahrenheit = function (celciusNum) {
  let fahrenheightValue = celciusNum * (9 / 5) + 32;
  let fahrenheightRounded = Math.round(fahrenheightValue * 10) / 10;
  return fahrenheightRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
