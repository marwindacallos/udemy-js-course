'use strict';

// VARIABLES HOISTING
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//FUNCTION
// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

function addDecl(a, b) {
  return a + b;
}

// const addExpr = function (a, b) {
//   return a + b;
// };

const addArrow = (a, b) => a + b;

//EXAMPLE

// if (!numProducts) deleteShoppingCart(); //will show undefined

var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All product deleted!`);
// }

////////////////////////// THE THIS KEYWORD IN PRACTICE
// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// REGULAR FUNCTION VS ARROW FUNCTIONS
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);

    //Solution #1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution #2
    // const isMillenial = () => {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
// jonas.calcAge();
// jonas.greet();

//Argument Keyword

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   // arguments exist but only on normal function
//   console.log();
//   arguments;
//   return a + b;
// };

let age = 30;
let oldAge = age;
age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friends:', friend);
// console.log('Me:', me);

// PRIMITIVE VS OBJECTS IN PRACTICE

// PRIMITIVE
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//REFERENCE
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastNmae = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

//COPYING OBJECTS
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
