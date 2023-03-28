'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push();
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 4);

// const flight = 'MH147';
// const sam = {
//   name: 'Sam Jonas',
//   passport: 28496784,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH9034';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 28496784) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passport');
//   }
// };
// checkIn(flight, sam);
// console.log(flight);
// console.log(sam);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(sam);
// checkIn(flight, sam);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher Order function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);

//   console.log(`Transformed By: ${fn.name}`);
// };
// transformer('Javascript is the best', upperFirstWord);
// transformer('Javascript is the best', oneWord);

// const high5 = function () {
//   console.log('👋');
// };

// document.addEventListener('click', high5);

// const greet = function (greetings) {
//   return function (name) {
//     console.log(`${greetings} ${name}`);
//   };
// };

// const greetHey = greet('Hey');
// greetHey('Noah');

// const greet = greetings => name => console.log(`${greetings} ${name}`);
// const greetHey = greet('Hey');
// greetHey('Noah');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} book a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Noah');
lufthansa.book(123, 'Nia');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Williams');

book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 321, 'Mary');
console.log(lufthansa);

const flightData = [563, 'Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);
book.call(eurowings, ...flightData);
