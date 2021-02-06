'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 2}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // ES6 enhanced object literals
  openingHours,
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//////////////////
//Working with String #3

//it will create an array
// split method
console.log('every+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// joining method
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

//Padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(123456));

//Repeat Method
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'Plane'.repeat(n)}`);
};

planesInLine(5);

////////////////////////////
// Working with String #2

const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnaS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();

// console.log(normalizedEmail);0
// console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate')); //Works now
// console.log(announcement.replace(/door/g, 'gate')); //g means global

// Booleans
const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log(`Part of the New Airbus family`);
// }

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are NOT allowed on board`);
  } else {
    console.log('Welcome abroad!');
  }
};
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

////////////////////////////
// Working with String #1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4)); // 0 based index
// console.log(airline.slice(4, 7)); // 0 based index

// //extracting
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };
// checkMiddleSeat('118');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// console.log(typeof new String('jonas').slice(1));

// ///////////////////////////////
// //MAPS ITERATION
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

//Convert object to map
// console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Iteration
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

//Converting map back to array
// console.log(...question);
// console.log(question.entries()); // same on the top
// console.log(...question.keys());
// console.log(...question.values());

//////////////////////////////
//MAPS FUNDAMENTALS

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
// console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));
///////////////////////////////////
//SETS
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// console.log(staff);
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('jonasschemedtmann').size);

// property NAMES

// const properties = Object.keys(openingHours);
// console.log(properties);

// console.log(`We are open on ${properties.length} days`);

// let openStr = `Wer are open on ${properties.length} days:`;

// for (const day of Object.keys(openingHours)) {
//   // console.log(day);
//   openStr += `${day}, `;
// }
// console.log(openStr);

// Property VALUES

// const values = Object.values(openingHours);
// console.log(values);

// //Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//////////////////////////////////
//Optional Chaining
// if (restaurant.openingHours.fri.open && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.mon ?? 'closed'; // using nullish coalescing operator
//   console.log(`On ${day}, we open at ${open}`);
// }

// // console.log(otherIngredients);

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exit');
// console.log(restaurant.order?.orderRissotto?.(0, 1) ?? 'Method does not exit');

// //Arrays
// const users = [{ name: 'Jonas', email: 'hello$jonas.io' }];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

////////////////////////////////
// Looping arrays the for-loop-of-Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [item] of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(...menu.entries());

//////////////////////////////////////////////
// Nullish Coalescing Operator
// Nullish: null  and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

/////////////////////////////////////////
//Use ANY data type, return ANY data type
//Short circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;

const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);

const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

// console.log('====AND====');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

//Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/////////////////////////////////////////
// Rest Pattern and Parameters
// Destructuring

// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

//REST, because on Left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, , rissotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, rissotto, otherFood);

//Objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  // console.log(sum);
};

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushroom', 'yo', 'noo');

///////////////////////////////////////////
// The Spread Operator
// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArray = [1, 2, ...arr];
// console.log(newArray);
// console.log(...newArray);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array
// const newMenuCopy = [...restaurant.mainMenu, 'Gnocci'];

// //Join 2 array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'Jonas';
// const letters = [...str, '', 's.'];
// console.log(letters);
// console.log(...str);
// console.log(`${...str} Schmedtmann`);

//Real World Examples
// const ingredients = [
//   prompt('Lets make pasta! Ingredient 1?'),
//   prompt('Lets make pasta! Ingredient 2?'),
//   prompt('Lets make pasta! Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta[(ingredients[0], ingredients[1], ingredients, [2])];
// restaurant.orderPasta(...ingredients);

//Objects Iterables
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//////////////////////////////////////////////////////
// Calling a funtion inside an object using destructuring

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // DESTRUCTURING OBJECTS
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //DEFAULT VALUES
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //MUTATING VARIABLE
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //NESTED OBJECTS
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

//DESTRUCTURING ARRAYS

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // RECEIVE 2 RETURN VALUES FROM A FUNCTION
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // NESETED DESTRUCTURING
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // DEFAULT VALUES
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
