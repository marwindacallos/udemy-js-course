// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';

const calcAge = (birthYear) => 2037 - birthYear;

// You can see it on prettier documentation.
// Look on mdn documentation, stack overflow and more

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// -What is temp amplitude? Answer: Difference between highest and lowest temp
// -How to compute masx and min temperatures?
// -What's a sensor error? And what to do?

// 2) Breaking up into sub-probkens
// - How to ignore errors?
// - Find max value in temp array
// - Subtact min from max (amplitude) and return it

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  // console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  // console.log(max, min);
  return max - min;
};
// const amplitudeNew = calcTempAmplitudeNew(temperatures);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? No! Just emerge two arrays

// 2) Breaking up into sub-problems
// - How to merge two arrays?

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

//////////////////////////////////////// CODING CHALLENGE #1

const temps1 = [12, 5, -5, 0, 4];
const temps2 = [17, 21, 23];

// function of execution
// will take the paremeter
const temps = [];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log('...' + str);
};

// printForecast(temps2);
// for loop to array
// push the loop to string
// string template literal
