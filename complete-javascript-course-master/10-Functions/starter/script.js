'use strict';

const booking = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const books = {
    flightNum: flightNum,
    numPassengers,
    price,
  };
  console.log(books);
  booking.push(books);
};

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// Passing Arguments Works Value vs Reference

//Passing arguments to function
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schemdtmann',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; // not good practice
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123456789) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
