'use strict';

///////////////////// PART 1

////////////////////////CODING CHALLENGE #1 & #2

// const markBMI = 95 / 1.88 ** 2
// const johnBMI = 85 / 1.76 ** 2

// let markHigherBMI;
// if (markBMI > johnBMI){
//  markHigherBMI = true;
//  console.log(`"Mark's BMI is higher than John's!"`);
// } else{
//  markHigherBMI = false;
//  console.log(`"John's BMI is higher than Mark's!"`);
// }

// console.log(markHigherBMI);

/////////////////////////CODING CHALLENGE #3

// const dolphinAverage = (97 + 90+ 101)/ 3
// const koalasAverage = (109 + 150 + 106)/ 3

// if (dolphinAverage === koalasAverage || dolphinAverage >= 100 && koalasAverage >= 100){
//  console.log(`Draw`);
// } else if (dolphinAverage > koalasAverage && dolphinAverage >= 100){
//  console.log(`Dolphin won`);
// } else if (koalasAverage > dolphinAverage && koalasAverage >= 100){
//  console.log(`Koala won`);
// } else{
//  console.log(`No one wins`);
// }

/////////////////////////////CODING CHALLENGE #4
const bill = 275
let tip;
// if (50 <= bill <= 300){
//  tip = bill * .15
// } else{
//  tip = bill * .2
// }
// console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${totalValue} `);
50 <= bill <= 300 ? tip = bill * .15 : tip = bill * .2;
const totalValue = bill + tip
// console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${totalValue} `);

/////////////////////// PART 2
////////////////////// CODING CHALLENGE #1

const calcAverage = (a, b, c) => (a + b +c) /3
const dolphinAverage = calcAverage(85, 54, 41)
const koalasAverage = calcAverage(23, 34, 27)

function checkWinner (dolphinAverage, koalasAverage){
 if (dolphinAverage > koalasAverage && dolphinAverage > koalasAverage*2){
  console.log(`Dolphin win (${dolphinAverage} vs. ${koalasAverage})`);
 } else if (dolphinAverage < koalasAverage && dolphinAverage*2 < koalasAverage){
  console.log(`Koalas win (${koalasAverage} vs. ${dolphinAverage})`);
 }
  else{
   console.log(`No one's win`);
  }
}
 
// checkWinner(dolphinAverage, koalasAverage);

///////////////////////////////// CODING CHALLENGE #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

function calcTip (bill){
 if (50 <= bill, bill <= 300){
 tip = bill * .15
 }else{
 tip = bill * .20
 } 
 return tip;
}
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
 const tip = calcTip(bills[i]);
 tips.push(tip);
 totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);