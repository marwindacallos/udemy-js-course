'use strict';

//////////////////////////////////////////PART 1
// VALUES AND VARIABLES
// let country = 'Philippines';
// let continent = 'Asia';
// let population = 106.7;
// let isIsland = true;
// let language;

// console.log(country, continent, population, isIsland, language);

////////////////////////// DATA TYPES
// const country = 'Philippines';
// const continent = 'Asia';
// const isIsland = true;
// let population = 106.7;
// let language = 'Filipino';

// console.log(country, continent, population, isIsland, language);

///////////////////////// BASIC OPERATORS
// population /= 2;
// population++;

// console.log(population);

///////////////////////// STRINGS AND TEMPLATE LITERALS
// const description = `${country} is in ${continent}, and its ${population} million speak ${language}.`

// console.log(description);

//////////////////////// IF ELSE STATEMENT
// if (population > 33){
//  console.log(`${country}'s population is above average`);
// } else {
//  console.log(`${country}'s population is ${population} million below average`);
// }

/////////////////////// TYPE CONVERSION AND COERCION 
'9' - '5'
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;

////////////////// EQUALITY OPERATORS 

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours === 1){
//  console.log(`Only 1 border`);
// }
// else if (numNeighbours > 1){
//  console.log(`More than 1 border`);
// }
// else {
// console.log(`No border`);
// }

/////////////////// LOGICAL OPERATORS

// const newCountry = 'Philippines';
// const newLanguange = 'English';
// const newPopulation = 106.7;
// const newIsIsland = true; 

// if (newLanguange === 'English' && newPopulation < 50 && newIsIsland !== true){
//  console.log(`You should live in ${newCountry}`);
// } else{
//  console.log(`${newCountry} does not meet your criteria :'(`);
// }

////////////////// THE SWITCH STATEMENT
// const language = prompt(`What's your language?`)
// switch(language){
//  case 'chinese':
//  case 'mandarin':
//   console.log(`MOST number of native speakers`);
//  break;
//  case 'english':
//   console.log(`3rd place`);
//  break;
//  case 'spanish':
//   console.log(`2nd place in number of native speakers`);
//  break;
//  case 'hindi':
//   console.log(`Number 4`);
//  break;
//  case 'arabic':
//   console.log(`5th mose spoken language`);
//  break;
//  default:
//  console.log(`Great langauage too`);
// }

/////////////////////// THE CONDITIONAL OPERATOR

// const population = 10;
// population > 33 ? console.log(`Your country's population is above average`) : console.log(`Your country's population is below average`);



///////////////////////// PART 2
//////////////////////////FUNCTIONS
// const country = 'Finland';
// const population = 6;
// const capitalCity = 'Helsinki'

// function describeCountry (country, population, capitalCity){
//  const yo = `${country} has ${population} million people and its capital city is ${capitalCity}`
//  return (yo);
// }

// function describeCountry (country, population, capitalCity){
//  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const description = describeCountry('Finland', 6, 'Helsinki');
// console.log(description);


////////////////////////////FUNCTIONS DECLARATIONS VS.EXPRESSIONS
// function percentageOfWorld1 (country, population){
//  const percentage = (population/7900)*100;
//  return `${country} has ${population} million people, so it's about ${percentage} of the world population.`
// } //function declation 

// const percentageOfWorld2 = function (country, population) {
//  const percentage = (population/7900)*100;
//  return `${country} has ${population} million people, so it's about ${percentage} of the world population.`
// } //function expression

// const percentageOfWorld3 = population => (population/7900)*100;
// // arrow function

// const typeOne = percentageOfWorld1('China', 1441)
// const typeTwo = percentageOfWorld2('China', 1441)
// const typeThree = percentageOfWorld3(1441)
// console.log(typeOne);
// console.log(typeTwo);
// console.log(typeThree);

/////////////////////////////FUNCTIONS CALLING OTHER FUNCTIONS
// function percentageOfWorld1(population) {
//  const percentage = (population/7900)*100
//  return percentage
// }

// function describePopulation (country, population){
//  const percentage = percentageOfWorld1(population)
//  return `${country} has ${population} million people, which is about ${percentage}% of the world`
// }

// const countryOne = describePopulation('China', 1441);
// console.log(countryOne);

////////////////////////////ARRAYS
// const populations = ['china', 'taiwan', 'india', 'thailand']
// console.log(populations.length===4);
// const percentages = [percentageOfWorld1(1441), percentageOfWorld1(41),percentageOfWorld1(11)];
// console.log(percentages);

////////////////////////// BASIC ARRAY OPERATIONS
// const neighbours =  ['taiwan', 'china', 'japan']

// neighbours.push('utopia') //add to last
// neighbours.pop('utopia') //remove the last


// if (neighbours.includes('Germany')===false){
//  console.log(`Probably not a central European country`);
// }

// neighbours[neighbours.indexOf('japan')] = 'Republic of Japan'; //changing part of an array

// console.log(neighbours);


//////////////////////////////OBJECTS

// const myCountry = {
//  country: 'Taiwan',
//  capital: 'Taipei',
//  language: 'Tainan',
//  population: 151,
//  neigbours: ['thailand', 'india', 'china']
// }

// myCountry.location = 'Portugal'; //dot notation
// myCountry['twitter'] = '@jonasschedtman'; //bracket notation

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neigbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);


// console.log(`${myCountry.population - 2}`);
// console.log(`${myCountry['population'] + 2}`);

///////////////////////////////OBJECTS METHODS

// const myCountry = {
//  country: 'Taiwan',
//  capital: 'Taipei',
//  language: 'Tainan',
//  population: 151,
//  neighbours: ['thailand', 'india', 'china'],
//  describe: function(){
//   console.log(`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//  },

//  checkIsland: function (){
//   this.isIsland = this.neighbours.length === 0 ? true : false;
//   return this.isIsland
//  }
// }

// myCountry.describe()
// console.log(myCountry.checkIsland());


///////////////////////////////THE FOR LOOP
// for (let rep = 1; rep <= 50; rep++){
//  console.log(`Voter number ${rep} is currently voting`);
// }

//////////////////////////////LOOPING ARRAYS BREAKING AND CONTINUING
const population = [10, 1441, 332, 83];

function percentageOfWorld1(population) {
 const percentage = (population/7900)*100
 return percentage
}
const percentage2 = [];
for (let i = 0; i < population.length; i++){
 // if(typeof population[i] !== 'number') continue;
 // if(typeof population[i] !== 'string') break;
 const perc = percentageOfWorld1(population[i]);
 percentage2.push(perc);
}


// console.log(percentage2);

/////////////////////////// LOOPING BACKWARDS

const listOfNeighbours = [
 ['Canada', 'Mexico'], 
 ['Spain'], 
 ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++)
 for (let y = 0; y < listOfNeighbours[i].length; y++);
 // console.log(`Neigbour: ${listOfNeighbours[i][y]}`);

///////////////////////// WHILE LOOP

const percentage3 = [];
let i = 0;
while (i < population.length) {
 const percent = percentageOfWorld1(population[i]);
 percentage3.push(percent);
 i++;
}

console.log(percentage3);
