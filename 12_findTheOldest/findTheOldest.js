const findTheOldest = function (people) {
  let oldest = people[0];

  people.filter((person) => {
    if (
      person.yearOfDeath - person.yearOfBirth >
      oldest.yearOfDeath - oldest.yearOfBirth
    ) {
      oldest = person;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
