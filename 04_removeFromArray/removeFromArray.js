//i - array
//o - new array without value or same array without value

// create a function that takes [] and (), then remove other arguments. We will use the rest operator here

const removeFromArray = function (array, ...args) {
  //
  console.log(array, ...args); // checking to confirm a match to my assumption.
  let newArray = []; // becomes a blank array if using empty brackets.
  for (let start = 0; start < array.length; start++) {
    //  console.log("start index ", start, "index value", array[start]);
    console.log(args); // checking to confirm a match to my assumption.
    console.log(typeof args); // checking to confirm a match to my assumption.
    if (!args.includes(array[start])) {
      // means if the argument is not equal to the array, then this returns true we will break out of the if and add to the new array.
      newArray.push(array[start]); // pushes the if true into new.array.
      //tried splice and it worked for the first, but it didnt work because it couldnt take multiple arguments.
    }
  }

  console.log("new array", newArray);
  return newArray;
};

// const newArray = [];
// array.forEach(function(value), ();

//declare a new empty array
//declare a new value
//create a loop with forEach to evaluate each array and push to remove an item.

// alternatively
// use filter method to find and remove something from an array.
//let removeFromArray = function (array, ...args) {
// declare an array with arguments using the rest operator
// return array.filter((value) => !args.includes(value));
// remove a certain value with Filter. Envoke a function that takes a callback (). a callback or callback function is
// any reference to executable code that is passed as an argument to another piece of code;
// that code is expected to call back (execute) the callback function as part of its job.
// It keeps the elements for which the callback returns a thruthy value. Excludes falsy values.
// in this case the callback checks
//};
//console.log(array);

// Do not edit below this line
module.exports = removeFromArray;
