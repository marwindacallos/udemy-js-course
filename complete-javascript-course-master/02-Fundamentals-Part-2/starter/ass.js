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
 // console.log(describePopulation('Finland', 13, 1441  ));

 // INTRODUCTION TO ARRAY

 const populations = [106.7, 1141, 50, 5.5];
 // console.log(populations.length === 4);
 const percentage = [
percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]), 
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[3]),
]
// console.log(percentage[1]);

//  BASIC ARRAY OPERATIONS (METHODS)
// const neighbours = ['vietnam', 'indonesia', 'china'] //1
// console.log(neighbours); 
// neighbours.push('Utopia'); //2
// console.log(neighbours);
// neighbours.pop('Utopia'); //3
// console.log(neighbours);
// if (neighbours.includes('Germany') === false){ //4
//  console.log(`Probably not a central European country :D`);
// } else{
//  console.log(`Yay a European country`);
// }
// neighbours[0] = 'India' //5
// console.log(neighbours);

/////////////////////////////////////////
// INTRODUCTION TO OBJECTS
// const myCountry = {
//  country : 'Philippines',
//  capital : 'NCR',
//  language : 'Filipino',
//  population : 106.7 ,
//  neighbours : ['Vietnam', 'China', 'India']
// };

/////////////////////////////////////
// RETRIEVING OBJECT AND CHANGING DATA IN OBJECT

// console.log(myCountry);

////////////////////////////
// DOT VS BRACKET NOTATION

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);


// console.log(`${myCountry.population - 2}`);

// myCountry['population'] += 2;
// console.log(myCountry.population);

////////////////////////////////////////// OBJECT METHODS

// const myCountry = {
//  country : 'Philippines',
//  capital : 'NCR',
//  language : 'Filipino',
//  population : 106.7 ,
//  neighbours : ['Vietnam', 'China', 'India'],
//  describe: `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}.`
// }; 
// console.log(myCountry.describe);

const myCountry = {
 country : 'Philippines',
 capital : 'NCR',
 language : 'Filipino',
 population : 106.7 ,
 neighbours : ['Vietnam', 'China', 'India'],
 describe: function(){ 
  console.log(`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
 },
 
 checkIsland: function(){ 
  this.isIsland = this.neighbours.length === 0 ? true : false;
  return this.isIsland
 }
}; 

// myCountry.describe();
// console.log(myCountry.checkIsland());

