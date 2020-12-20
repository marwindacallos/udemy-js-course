'use strict';

// ACTIVATING STRICT MOD
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log('I can drive')

// const interface = 'Audio';
// const private = 534;
// const if = 23;



// FUNCTION

function logger(){
 console.log(`My name is Jonas`);
}

// logger(); 

function fruitProcessor(apples, oranges){
 // console.log(apples, oranges);
 const juice =`Juice with ${apples} apples and ${oranges} oranges.`;
 return (juice);
}
const appleJuice = fruitProcessor(5, 3);
// console.log(appleJuice);
// console.log(fruitProcessor(3,2));

const appleOrangeJuice = fruitProcessor(10,10);
// console.log(appleOrangeJuice);

Number('23'); //ALSO A FUNCTION
const num = Number('23'); //PIECE OF CODE THAT YOU CAN USE REPEATEDLY


// FUNCTION DECLARATIONS VS EXPRESSIONS

function calcAge1(birthYear){ //generic function declarations
 return 2037 - birthYear;
}
const age1 = calcAge1(1991); 
// console.log(age1);

const calcAge2 = function (birthYear){ //ANONYMOUS FUNCTION expressions
 return 2037 - birthYear;
}
const age2 = calcAge2(1997);
// console.log(age1, age2);

// ARROW FUNCTION

 const calcAge3 = birthYear => 2037 - birthYear;
 const age3 = calcAge3(1991);
 // console.log(age3);

 const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2020 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`
 }

 // console.log(yearsUntilRetirement(2000, 'Marwin'));
 

 // FUNCTION CALLING OTHER FUNCTIONS

 function cutFruitPieces(fruit){
  return fruit * 4;
 }
 function fruitProcessor(apples, oranges){
 const applePieces = cutFruitPieces(apples);
 const orangePieces = cutFruitPieces(oranges);

 const juice =`Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
 return (juice);
}

// console.log(fruitProcessor(2,3));

// REVIEW FUNCTIONS

const calcAge5 = function(birthYear){
 return 2037 - birthYear;
}

const yearsUntilRetirement1 = function (birthYear, firstName) {
  
  const age = calcAge5(birthYear)
  const retirement = 65 - age;
  // return retirement;
  
  if (retirement > 0){
   console.log(`${firstName} retires in ${retirement} years`);
   return retirement;
  } else {
   console.log(`${firstName} has already retired 🎉`)
   return -1
  }

  // return `${firstName} retires in ${retirement} years`

 }
// console.log(yearsUntilRetirement1(1991, 'Jonas'));
// console.log(yearsUntilRetirement1(1950, 'Mike'));


// ARRAYS 

const friends = ['Michael', 'Steven', 'Peter']; //LITERAL SYNTAX


// console.log(friends[1]);
// console.log(friends[1].length);
// console.log(friends[friends.length - 1]);

friends[2] = 'Jay'
// console.log(friends[2]);

// const years = new Array(1991, 1984, 2008, 'yo', 'gurl');

const firstNmae = 'Jonas';
const jonas = [firstNmae, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas.length);

// Exercise 
const calcAge = function (birthYear){
 return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const ooh = calcAge(years);
// console.log(ooh);
const age10 = calcAge(years[0]);
const age11 = calcAge(years[1]);
const age12 = calcAge(years[years.length -1]);
// console.log(age10, age11, age12);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

console.log(years[years.length - 1]); // - 1 is the last -2 is the second last inside the array.

// console.log(age10);

