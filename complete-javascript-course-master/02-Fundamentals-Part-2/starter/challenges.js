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
