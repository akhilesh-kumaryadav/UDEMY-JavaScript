"use strict";
/* const bookings = [];

const createBooking = function (
  flightName,
  numPassengers = 1,
  price = 199 * 4,
  totalPrice = 2 * price
) {
  const booking = {
    flightName,
    numPassengers,
    price,
    totalPrice,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LM2344');
createBooking('LM1234', 2, 123, 345);
createBooking('LR9854', 5)

createBooking('JI0987', undefined, 234); */
/* 
const flight = 'JH989';
const jonas = {
    name : 'Akhilesh Kumar',
    passport : 12344567890
}

const checkIn = function(flightNum, passenger){
    flightNum = 'FD010';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 12344567890){
        console.log("CheckIn");
    }
    else {
        console.log('Wrong Passport');
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas); */

/* const oneWord = function (str) {
  return str.replace(/ /g, "");
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformed string : ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};

transformer("Javascript is the best !!", upperFirstWord);
transformer("Javascript is the best !!", oneWord); */

/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Akhilesh");
greeterHey("Kamal");

greet("munich")("Brayan");


//using Arrow functions
const greet2 = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey2 = greet("Hey");
greeterHey2("Akhilesh");
greeterHey2("Kamal");

greet2("munich")("Brayan"); */

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

//With event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
/* 
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane);

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
 */

/* const euroWings = {
  airline: "EuroWings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

const euroBind = book.bind(euroWings);
euroBind(549, "Mohan");

const LuftBind = book.bind(lufthansa);
LuftBind(501, "Nehru");

const euroBind23 = book.bind(euroWings, 23);
euroBind23("Khilesh"); */

/* //CALL() method
book.call(euroWings, 549, "Mohan Das");
console.log(euroWings);

//APPLY() method
const data = [501, "Nehru"];
book.apply(lufthansa, data);
console.log(lufthansa);

//OR
book.call(lufthansa, ...data);
 */

//PARTIAL APPLICATION
const addTax = (rate, value) => value + rate * value;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(200));
console.log(addVAT(300));

const addTax1 = rate => {
  return value => value + rate * value;
};

const rateAdded = addTax1(0.23);
console.log(rateAdded(200));
console.log(rateAdded(300));