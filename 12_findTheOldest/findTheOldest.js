const findTheOldest = function (people) {
  // how to find the oldest person still alive?
  // use the reduce function of JS.
  // calculate the age of each person.
  // check if the person has a year of death. if no, then add todays date.
  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear(); // return current year using Date()
    }
    return death - birth;
  };
  return people.reduce((oldest, currentPerson) => {
    // oldestAge gets the age of the oldest person's year of death and birth
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

    // currentAge gets the age of the current person's year of death and birth
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );

    // return name if current age is older than the oldest age, else return current oldest age
    if (oldestAge < currentAge) {
      return currentPerson;
    } else {
      return oldest;
    }
  });
};
// Do not edit below this line
module.exports = findTheOldest;
