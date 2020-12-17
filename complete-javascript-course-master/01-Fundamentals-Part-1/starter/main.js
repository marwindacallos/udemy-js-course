// 010 VALUES AND VARIABLES
let js = 'amazing';
// console.log(40 + 8 + 3 - 10); 

let bot = ['hey', 'fucker']
// console.log(bot[1])

let six ;
// console.log(typeof(six)); 
// console.log(typeof gurl);
// console.log(typeof six);

// OPERATORS

// const now = 2039
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// const firstName = 'Marwin';
// console.log(firstName + ' ' + language);

// console.log(ageJonas * 2, ageJonas / 10, 2**3);

// console.log(firstName + ' ' + language);

// let x = 5 + 10;
// x +=10; //x = x + 10
// x *=10; //x = x * 10
// x -=10; //x = x - 10
// x--;
// x++;
// console.log(x);
  // COMPARISON OPERATOS TO PRODUCE BOOLEAN VALUES

  // console.log(ageJonas > ageSarah);

// console.log(ageSarah >= 22);

// 015 OPERATOR PRECEDENCE

const now = 2039
const ageJonas = now - 1991;
const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
// console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);


// 017 TEMPLATE LITERALS

const firstName = 'Jonas';
const job = 'teacher';
// const birthYear = 1991;
const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);
  // TYPE COERCION

  // const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`
  // console.log(jonasNew);

  // console.log(`String with \n\
  // multiple \n\
  // lines \n\
  // `);
  // USING ES6
  // console.log(`HEY
  // HELLO
  // LINES`);


// IF STATEMENTS

const age = 15;

if (age >= 18){
 console.log('Srah can start driving license');
} else{
 const yearsLeft = 18 - age;
 // console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}


const birthYear = 1908;

let century;
if (birthYear <= 2000){
 century = 20;
}else{
 century = 21;
}
// console.log(century);

// TYPE CONVERSION AND COERSION

const inputYear = '1991';
// console.log(inputYear + 18);
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18, (inputYear));

// console.log(Number('Jonas'));
// console.log(typeof NaN);
 // COERCION
 // console.log('I am ' +23+ ' years old');
 // console.log('23' - '15' + 3);
 // console.log();

 // 021 TRUTHY AND FALSY

 // console.log(Boolean(0));
 // console.log(Boolean(undefined));
 // console.log(Boolean('Jonas'));
 // console.log(Boolean({}));
 // console.log(Boolean(''));

 const money = 0;
 // if(money){
 //  console.log("Don't spend it all");
 // }else{
 //  console.log('You should get a job');
 // }

 // let soul; 
 // if(soul){
 //  console.log(`Soul is if so Soul must be tru`);
 // } else {
 //  console.log(`soul is else so Soul must be false`);
 // }

 // 022 EQUALITY OPERATORS
 
 // const age22 = 18;
 // if(age22=== 18) console.log('you just became an adult');

 // const favourite = Number(prompt("What's your favorite number?"))
 // console.log(favourite);
 // console.log(typeof favourite);

 // if (favourite === 23){ // '23' == 23
 //  console.log('Cool! 23 is an amazing number');
 // }else if(favourite === 7){
 //  console.log('7 another cool number');
 // }else{
 //  console.log("number nor 7 or 23");
 // }


  //023 BOOLEAN LOGIC
 // !==, !=, !, &&, ||, ===, ==


 // 024 LOGICAL OPERATORS
 const hasDriversLicense = true; // A
 const hasGoodVision = false; //B

 // console.log(hasDriversLicense || hasGoodVision);
 // console.log(hasDriversLicense &&  hasGoodVision);
 // console.log(hasDriversLicense && !hasGoodVision );

 const shouldDrive = hasDriversLicense && hasGoodVision;

 // if(shouldDrive){
 //  console.log('Sarah is able to drive');
 // }else{
 //  console.log('Someonelse should drive ');
 // }

 const isTired = true; // C
 // console.log(hasDriversLicense && hasGoodVision && !isTired);

 // (26)THE SWITCH STATEMENT
