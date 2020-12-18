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
console.log(appleJuice);
console.log(fruitProcessor(3,2));

const appleOrangeJuice = fruitProcessor(10,10);
console.log(appleOrangeJuice);

Number('23'); //ALSO A FUNCTION
const num = Number('23'); //PIECE OF CODE THAT YOU CAN USE REPEATEDLY


// FUNCTION DECLLARATIONS VS EXPRESSIONS
