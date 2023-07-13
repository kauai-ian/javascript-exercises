const leapYears = function (years) {
  // if statement && then is leap year (returns true)
  // Every year that is divisable by 4 (remainder of 4) then add it to list.
  // if years is divided by 4 and the remainder is zero, then return the years value.
  // Also it checks against years divisable by 100 (not allowed) and 400 (is allowed).
  // The output is a list of leap years
  if (years % 4 === 0 && (years % 100 !== 0 || years % 400 === 0)) {
    console.log(true);
    return true;
  } else {
    return false;
  }
};
// Do not edit below this line
module.exports = leapYears;
