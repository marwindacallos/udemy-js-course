'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy `);
    }
  });
};

// checkDogs([3, 4, 2, 12, 7], [4, 1, 15, 8, 3]);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  // console.log(humanAges);
  // console.log(adults);
  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length, 0;
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  // 2 3. (2+3)/2 = 2.5 === 2/2 + 2/3 = 2.5
  return average;
};

// Making An Array Version

const calcAverageHumanAgeArr = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAgeArr([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAgeArr([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);
