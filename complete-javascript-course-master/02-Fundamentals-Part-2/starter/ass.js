// ASSIGNMENT FUNCTION

function describeCountry(country, population, capitalCity){
 const oneCountry = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
 return (oneCountry);
}

const oneDescribeCountry = describeCountry('philippines', 6, 'mamen');
// console.log(oneDescribeCountry);

function favorites(color, food, drink){
 const favorite = `my favorite color is ${color}, food is ${food}, and my favorite drink is ${drink}`;
 return (favorite);
}

const myFavorite = favorites('green', 'chicken curry', 'water');
// console.log(myFavorite);

// FUNCTION DECLARATIONS VS. EXPRESSIONS

 // function declarations
 function percentageOfWorld1(populations){
  return populations / 7900 * 100;
 }

 const pop1 = percentageOfWorld1(106.7)
 
 // function expression
 
 const percentageOfWorld2 = function(populations){
  return populations / 7900 * 100;
 }
 const pop2 = percentageOfWorld2(106.7)
 const pop3 = percentageOfWorld2(1141)

 // console.log(pop1, pop2, pop3);


 // ASSIGNMENT ARROW FUNCTIONS
 const percentageOfWorld3 = populations => populations / 7900 * 100;

 const pop4 = percentageOfWorld3(1141);
 // console.log(`here it is ${pop4}`);

 // FUNCTIONS CALLING OTHER FUNCTIONS

 function describePopulation(country, population, populations){
  const pop = percentageOfWorld3(populations)

  const pops = `${country} has ${population} million people which is about ${pop} of the world `;
  return (pops);
 }
 console.log(describePopulation('Finland', 13, 1441 ));
