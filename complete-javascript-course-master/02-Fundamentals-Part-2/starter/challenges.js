// 'use strict';
// CODING CHALLENGE #1 FUNCTION
// DATA 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
// DATA 2 VARIABLES
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);


function checkWinner(avgDolphins, avgKoalas){
 if (avgDolphins >= avgKoalas * 2){
  console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
 }else if(avgKoalas >= avgDolphins * 2){
  console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
 }
 else{
  console.log(`Draw, No one win`);
 }
}
// checkWinner(avgDolphins, avgKoalas);
// const winner2 = checkWinner(avgDolphins2, avgKoalas2);

// CODING CHALLENGE #2

const bills = [125, 555, 44]

function calcTip (bill){
 if (50 <= bill, bill <= 300){
 tip = bill * .15
 }else{
 tip = bill * .20
 } 
 return tip;
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips);

const total = [tips[0]+bills[0], tips[0]+bills[0], tips[0]+bills[0]];
// console.log(total);

///////////////////// CODE CHALLENGE /#3

// const BMI = mass / height ** 2

const mark = {
 fullName: 'Mark Miller',
 mass: 78,
 height: 1.69,
 calcBMI: function (){
  this.bmi = this.mass / this.height ** 2;
  return this.bmi
 },
}

const john = {
 fullName: 'John Smith',
 mass: 92,
 height: 1.95,
 calcBMI: function (){
  this.bmi = this.mass / this.height ** 2;
  return this.bmi
 },
}

mark.calcBMI()
john.calcBMI()
// console.log(mark.bmi, john.bmi);

// const higherBMI = john.calcBMI > mark.calcBMI ? 'higher' : 'lower';

// console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is ${higherBMI} than ${mark.fullName}'s BMI(${mark.calcBMI()})`)

// if(john.bmi > mark.bmi){
//  console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI(${mark.calcBMI()})`);
// }else if(john.bmi < mark.bmi){
//  console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is lower than ${mark.fullName}'s BMI(${mark.calcBMI()})`)
// }else{
//  console.log(`draw`);
// }