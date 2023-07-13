const palindromes = function (str) {
  const newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return newStr.split("").reverse().join("") == newStr;
};

// Do not edit below this line
module.exports = palindromes;
