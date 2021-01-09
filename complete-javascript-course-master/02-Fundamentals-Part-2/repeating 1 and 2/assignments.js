'use strict';

// VALUES AND VARIABLES
// let country = 'Philippines';
// let continent = 'Asia';
// let population = 106.7;
// let isIsland = true;
// let language;

// console.log(country, continent, population, isIsland, language);

////////////////////////// DATA TYPES
const country = 'Philippines';
const continent = 'Asia';
const isIsland = true;
let population = 106.7;
let language = 'Filipino';

console.log(country, continent, population, isIsland, language);

///////////////////////// BASIC OPERATORS
population /= 2;
population++;

console.log(population);

///////////////////////// STRINGS AND TEMPLATE LITERALS
const description = `${country} is in ${continent}, and its ${population} million speak ${language}.`

console.log(description);

//////////////////////// IF ELSE STATEMENT
if (population > 33){
 console.log(`${country}'s population is above average`);
} else {
 console.log(`${country}'s population is ${population} million below average`);
}

/////////////////////// TYPE CONVERSION AND COERCION 
'9' - '5'
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;

////////////////// EQUALITY OPERATORS 

const numNeighbours = prompt('How many neighbour countries does your country have?');