// ASSIGNMENT 1
// Values and Variables

let country = 'Philippines';
let continent = 'Asia';
let phPopulation = 106700000

// console.log(`I am living in ${country}, located on ${continent} and we have population of ${population}`);

// Data Types
let isIsland = 'Philippines';
isIsland = true;
// let language;

// console.log(typeof isIsland);
// console.log(typeof country);
// console.log(typeof continent);

// LET CONST VAR

// let language = 'Filipino';


// console.log(language, firstName);

// language = 'English';
// console.log(language);

// BASIC OPERATORS

let halfCountry = phPopulation / 2
// console.log(`Each half of ${country} will have ${halfCountry} of population`); 

halfCountry++;
// console.log(halfCountry);

let finPopulation = 6000000
if (finPopulation > phPopulation){
 console.log(`No`);
}
else {
 // console.log(`Yes, my population is bigger`);
}

let description = 'Portugal is in Europe, and its 11 million people speak portugues'
// console.log(description);

// ASSIGNMENT 2 (STRINGS  AND TEMPLATE LITERALS)

// console.log(`${country} is in ${continent}, and its ${phPopulation} million people speak ${language}`);

// console.log('9' - '5'); //4
// console.log('19' - '13' + '17'); //617
// console.log(typeof('19' - '13' + '17')); //string
// console.log('19' - '13' + 17); //23
// console.log('123' < 57); //false
// console.log(5 + 6 + '4' + 9 - 4 - 2); //1143
// console.log(typeof(5 + 6 + '4' + 9 - 4 - 2));  //number

 // ASSIGNMENT EQUALITY OPERATORS

 // const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
 // if (numNeighbours === 1){
 //  console.log(`Only 1 border!`);
 // }
 // else if(numNeighbours > 1){
 //  console.log(`More than 1 border`);
 // }
 // else{
 //  console.log(`No borders`);
 // }



 // ASSIGNMENT LOGICAL OPERATOS
 const island = true;
 const wantLessPeople = 50000000;
 const wantSpeakEnglish = true;
     // YOU ACTUALLY DONT NEED TO WRITE GIVEN IN THIS ASSIGNMENT JUST LIKE THE ANSWER

 let suggestedCountry = 'Philippines';
 const sCIsland = false;
 const sCSpeakEnglish = true;
 const sCLessPeople = 40000000;

 
 const sarahWant = ((!island === sCIsland)&&(wantLessPeople > sCLessPeople)&&(wantSpeakEnglish === sCSpeakEnglish))

 // if (sarahWant === true){
 //  console.log(`You should live in ${suggestedCountry}`);
 // } else{
 //  console.log(`${suggestedCountry} does not meet your criteria`);
 // }


// ASSIGNMENT THE SWITCH STATEMENT

// const language = 'english'
// switch(language){
//  case 'chinese':
//  case 'mandarin':
//   console.log(`MOST number of native speaker!`);
//   break;
//  case 'spanish':
//   console.log(`2nd place in number of native speakers`);
//   break;
//  case 'english':
//   console.log(`3rd place Yay!`);
//   break;
//  case 'hindi':
//   console.log(`Ooh! We got 4th`);
//   break;
//  case 'arabic':
//   console.log(`5th but not the least`);
//   break;
//  default:
//   console.log(`Well at least it's a language`);
//   break;
// }

// ASSIGNMENT THE CONDITIONAL (TERNARY) OPERATOR
//  1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original
  const myCountry = 106;
  const myCountryName = 'Philippines';
  myCountry > 33 ? console.log(`${myCountryName} population is above average.`) : console.log(`${myCountryName} population is below average.`)
  
  const myCountryNames = myCountry > 33 ? 'above' : 'below';
  console.log(`${myCountryName}'s population is ${myCountry > 33 ? 'above' : 'below'} average.`)