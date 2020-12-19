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

console.log(fruitProcessor(2,3));