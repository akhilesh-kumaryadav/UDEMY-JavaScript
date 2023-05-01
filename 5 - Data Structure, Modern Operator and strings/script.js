//'use strict';

// Data needed for a later exercise
/*  const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'; */

// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
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

  //ES6
  openingHours,
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//console.log(restaurant.openingHours.mon);
//console.log(restaurant.openingHours.mon.open);

/* if(restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open)
}

if(restaurant.openingHours.fri){
  console.log(restaurant.openingHours.fri.open);
} */

/* if(restaurant.openingHours){
  if(restaurant.openingHours.mon){
    if(restaurant.openingHours.mon.open){
      console.log('Yes open');
    }
  }
}

//with OPTIONAL CHAINING
console.log(restaurant.openingHours?.mon?.open); */

/* const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? "Closed";
  console.log(`On ${day}, we open at ${open}`);
} */

/* //Methods

restaurant.orderPizza?.('Mushroom', 'Chick') ?? 'Method does not exist'
restaurant.order?.('Mushroom', 'Chick') ?? console.log( 'Method does not exist') */

/* //Arrays
const users = [{name : 'Akhilesh', Email : "akhilesh@io"}];

console.log(users[0]?.name ?? "User is not there");
console.log(users[1]?.name ?? 'User is not there');
console.log(users[0]?.type ?? 'User is not there'); */

/* //Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

for(const day of properties){
  console.log(day);
}

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

for(const val of values){
  console.log(val);
}
 */

/* 

//Entries (NAMES + VALUES)
const entries = Object.entries(openingHours);
console.log(entries);

for(const entry of entries){
  console.log(entry);
}

for (const [key, {open, close}] of entries) {
  console.log(`On ${key}, we open at ${open}, and closes at ${close}`);
} */

/* 'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log('Task 1')
const [player1, player2] = game.players;
console.log(player1);
console.log(player2);

console.log('Task 2');
const [gk, ...fieldPlayers] = player1;
console.log(gk);
console.log(fieldPlayers);

console.log('Task 3');
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

console.log('Task 4');
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

console.log('Task 5');
//const {team1, x:draw, team2} = game.odds;
//OR
const{odds : {team1, x:draw, team2}} = game;
console.log(team1);
console.log(draw);
console.log(team2);

console.log('Task 6');
function printGoals(...playersName){
  console.log(playersName)
  console.log(`${playersName.length} goal scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
printGoals('Lewandowski', 'Gnarby');

console.log('Task 7');
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win'); */

//('use strict');
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* console.log('---------Task 4');
const scorers = {}
for(const player of game.scored){
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers); */

//console.log("---------Task 1");
/* const scored = game.scored;
for(let i = 0 ; i < scored.length ; i++){
  console.log(`Goal ${i+1} : ${scored[i]}`);
} */

/* for([i, player] of game.scored.entries()){
  console.log(`Goal ${i + 1} : ${player}`);
}

console.log('---------Task 2');
const odds = Object.values(game.odds);
console.log(odds);
let avg = 0;
for(const odd of odds){
  avg += odd;
}

console.log(avg / odds.length);

console.log('---------Task 3');
for(const [team, odd] of Object.entries(game.odds)){
  const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;

  console.log(`Odd of ${teamString} : ${odd}`);
} */

const orderSet = new Set([
  'akhilesh',
  'pizza',
  'rasgulla',
  'biryani',
  'Pizza',
  'akhilesh',
]);

/* console.log(orderSet);

console.log(orderSet.size);

console.log(orderSet.has('pizza'));
console.log(orderSet.has('Hila'));

orderSet.add('Garlic');
orderSet.add('Garlic');
console.log(orderSet)

orderSet.delete('Garlic');
console.log(orderSet);

for(const setItem of orderSet){
  console.log(setItem);
}

orderSet.clear();
console.log(orderSet); */

/* 
//how many different post are there, store it array form
const staff = ['Waiter', 'Maneger', 'Waiter','Chef', 'Waiter', 'Chef'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

//if only want number of different post
console.log(new Set(['Waiter', 'Maneger', 'Waiter', 'Chef', 'Waiter', 'Chef']).size);

//if wanted number of unique letters in the string
console.log(new Set('akhileshkumaryadav').size); */

/* const rest = new Map();
rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'Fuck you')
  .set(false, 'We are closed');

rest.set([1, 2], 'test');
console.log(rest);

console.log(rest.get([1, 2]));

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest); */

/* const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🏆'],
  [false, 'Try Again!'],
]);

//Map to array
console.log([...question]);
console.log([...question.entries()]);
console.log(...question.keys());
console.log([...question.values()]);
 */

/* ('use strict');

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log('Task 1');
const events = [...new Set(gameEvents.values())];
console.log(events);
console.log('Task 2');
gameEvents.delete(64);
console.log(gameEvents);
console.log('Task 3');
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
console.log('Task 4');
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key} : ${value}`);
}
 */

/* // Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Option ${key} : ${value}`);
}

const userAnswer = Number(prompt('Type your answer'));

console.log(question.get(userAnswer === question.get('correct')));
 */

/* const airline = 'TAP Air Protugal'; */
/* const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B460'[0]);

console.log(airline.length);
console.log('B747'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Protugal'));
console.log(airline.indexOf('protugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-1));
console.log(airline.slice(1, -1));
 */

/* const checkMiddleSeat = function (seat) {
  //B and E are the middle seat
  const s = seat.slice(-1);
  if (s == 'B' || s == 'E') {
    console.log('You got middle seat, Ohh Shit!!!');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E'); */

/* const airline = 'TAP Air Protugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//FIX Capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Check emails
const email = 'hello@akhilesh.io';
const loginEmail = '    HelLO@aKHilEsH.IO   \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

//   OR
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(normalizedEmail === email);

//Different form of trim
console.log(loginEmail.trimStart());
console.log(loginEmail.trimEnd()); */
/* 
//Replacing
const priceINR = '288,89R';
const priceUS = priceINR.replace('R', '$').replace(',', '.');
console.log(priceUS);

//Replacing all
const announcement =
  'All passenger come to boarding door 23. Boarding door 23!';

announcement.replace('door', 'gate');
announcement.replace('door', 'gate');
console.log(announcement);

//Raplacing all with regular expressions
const announcement1 =
  'All passenger come to boarding door 23. Boarding door 23!';
announcement1.replace(/door/g, 'gate');
console.log(announcement1); */

//Methods returning BOOLEAN
/* const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('beoing'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('Aio'));
console.log(plane.endsWith('neo'));
console.log(plane.endsWith('net'));

//Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are not allowed to onbroad');
  }
  else {
    console.log('Welcome abroad!!!');
  }
};

checkBaggage('I have a Laptop, food and a Knife');
checkBaggage('I have Socks and camera');
checkBaggage('I got some snacks and a gun for protection'); */

/* console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Akhilesh kumar'.split(' ');
console.log(firstName);
console.log(lastName);

//JOINing the string using JION() method
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('akhilesh kumar yadav');
capitalizeName('moHan maChuLlam');
 */

/* //Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Akhilesh'.padStart(20, '+').padEnd(30, '+'));

//Masking credit card number
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(123451245));
console.log(maskCreditCard(1234123413241234));
console.log(maskCreditCard('12341235123421234'));

//Repeat() method
const message2 = 'Bad weather ... flights delayed ....';
console.log(message2.repeat(5)); */
/* 
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('textarea').value = `underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure`;

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  //console.log(text);

  const texts = text.split('\n');
  console.log(texts)

  for (let [i, row] of texts.entries()) {
    let [first, second] = row.trim().toLowerCase().split('_');
    
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

    console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
  }
}); */

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

for (let indi of flights.split('+')) {
  let [status, from, to, time] = indi.split(';');

  status = status.split('_').join(' ');
  from = from.slice(0, 3).toUpperCase();
  to = to.slice(0, 3).toUpperCase();
  time = time.replace(':', 'h');

  if (status.includes('Delayed')) {
    console.log(
      `🔴 ${status} from ${from} to ${to} (${time})`.padStart('50', ' ')
    );
  } else {
    console.log(
      `${status} from ${from} to ${to} (${time})`.padStart('50', ' ')
    );
  }
}
