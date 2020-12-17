// CODING CHALLENGE 1

 // DATA 1

 let markWeight = 78;
 let markHeight = 1.69; 
 let johnWeight = 92; 
 let johnHeight = 1.95; 

 let markBMI = (markWeight / (markHeight ** 2));
 let johnBMI = (johnWeight / (johnHeight ** 2));
// console.log(markBMI, johnBMI);
 let markHigherBMI = (markBMI > johnBMI)

 // console.log(markHigherBMI);

 // DATA 2

 let markWeight2 = 95;
 let markHeight2 = 1.88; 
 let johnWeight2 = 85; 
 let johnHeight2 = 1.76; 

 let markBMI2 = (markWeight2 / (markHeight2 ** 2));
 let johnBMI2 = (johnWeight2 / (johnHeight2 ** 2));

 let markHigherBMI2 = (markBMI2 > johnBMI2)

 // console.log(markHigherBMI2);

// CHALLENGE 2
 // DATA 1
 if (markBMI > johnBMI){
  // console.log(`Mark's BMI is higher than John's,
  // Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
 }else{
  console.log(`Mark's BMI is lower than John's,
  Mark's BMI ${markBMI} is lower than John's (24.19)`);
 }
 // DATA 2
 if (markBMI2 > johnBMI2){
  console.log(`Mark's BMI is higher than John's,
  Mark's BMI ${markBMI2} is higher than John's ${johnBMI2}`);
 }else{
  // console.log(`Mark's BMI is lower than John's,
  // Mark's BMI ${markBMI2} is lower than John's ${johnBMI2}`);
 }

 // CODING CHALLENGE #3 (You don't need to write every data just the formula instead)

  const dolphin1 = 96;
  const dolphin2 = 108;
  const dolphin3 = 89;
  const dolphineAverage = (dolphin1 + dolphin2 + dolphin3)/3;
  // console.log(dolphineAverage);
 
  const koalas1 = 88;
  const koalas2 = 91;
  const koalas3 = 110;
  const koalasAverage = (koalas1 + koalas2 + koalas3)/3;
  // console.log(koalasAverage)

  // if ((dolphineAverage > koalasAverage)&&(dolphineAverage >= 100)){
  //  console.log(`Dolphine Wins a Trophy`);}
  //  else if((dolphineAverage < koalasAverage)&&(koalasAverage >= 100)){
  //   console.log(`Koalas Wins a Trophy`);
  //  } else if((dolphineAverage === koalasAverage)||((koalasAverage >= 100)&&(dolphineAverage >= 100))){
  //  console.log(`Draw`); 
  // } else{
  //  console.log(`No one wins the trophy`);
  // }
  // DATA 2
  const oneDolphin1 = 97;
  const oneDolphin2 = 112;
  const oneDolphin3 = 101;
  const oneDolphineAverage = (oneDolphin1 + oneDolphin2 + oneDolphin3)/3;
  // console.log(oneDolphineAverage);
 
  const oneKoalas1 = 109;
  const oneKoalas2 = 95;
  const oneKoalas3 = 123;
  const oneKoalasAverage = (oneKoalas1 + oneKoalas2 + oneKoalas3)/3;
  // console.log(oneKoalasAverage)

  // if ((oneDolphineAverage > oneKoalasAverage)&&(oneDolphineAverage >= 100)){
  //  console.log(`Dolphine Wins a Trophy`);}
  //  else if((oneDolphineAverage < oneKoalasAverage)&&(oneKoalasAverage >= 100)){
  //   console.log(`Koalas Wins a Trophy`);
  //  } else if((oneDolphineAverage === oneKoalasAverage)||((oneKoalasAverage >= 100)&&(oneDolphineAverage >= 100))){
  //  console.log(`Draw`); 
  // } else{
  //  console.log(`No one wins the trophy`);
  // }
  // DATA 3
  const twoDolphin1 = 97;
  const twoDolphin2 = 112;
  const twoDolphin3 = 101;
  const twoDolphineAverage = (twoDolphin1 + twoDolphin2 + twoDolphin3)/3;
  // console.log(oneDolphineAverage);
 
  const twoKoalas1 = 109;
  const twoKoalas2 = 95;
  const twoKoalas3 = 106;
  const twoKoalasAverage = (twoKoalas1 + twoKoalas2 + twoKoalas3)/3;
  // console.log(oneKoalasAverage)

  // if ((twoDolphineAverage > twoKoalasAverage)&&(twoDolphineAverage >= 100)){
  //  console.log(`Dolphine Wins a Trophy`);}
  //  else if((twoDolphineAverage < twoKoalasAverage)&&(twoKoalasAverage >= 100)){
  //   console.log(`Koalas Wins a Trophy`);
  //  } else if((twoDolphineAverage === twoKoalasAverage)||((twoKoalasAverage >= 100)&&(twoDolphineAverage >= 100))){
  //  console.log(`Draw`); 
  // } else{
  //  console.log(`No one wins the trophy`);
  // }


  // CODING CHALLENGE #4

 const bill = 430;
 const tip = 50 < bill > 300 ? (bill * .15) : (bill * .20);
 // const tip = 50 <= bill && bill >= 300 ? (bill * .15) : (bill * .20);

 console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`)