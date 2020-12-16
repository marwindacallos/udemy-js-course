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
