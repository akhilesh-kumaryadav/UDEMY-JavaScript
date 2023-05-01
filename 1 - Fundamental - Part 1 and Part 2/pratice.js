/* let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass/markHeight ** 2;
let johnBMI = johnMass/johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's BMI");
} else {
    console.log("John's BMI is higher than Mark's BMI");
}

if(markBMI > johnBMI){
    console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI})`);
} */

















/*
const firstName = "Akhilesh";
const job = "Coder";
const birthYear = 1999;
const currentYear = 2023;

const akhileshWithTemplateLiterals = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`
console.log(akhileshWithTemplateLiterals)*/






/* console.log("starting with \n multiple \n lines.")
console.log("starting with \n\ multiple \n\ lines.")
console.log(`starting with
multiple
        lines`) */

/* let country = "India";
let continent = "Asia";
let population = 100000000;

console.log(`Country - ${country}`);
console.log(`Continent - ${continent}`);
console.log(`Population - ${population}`); */






/* const age = 15;

if(age >= 18){
    console.log(`Akhilesh can apply for the driving license 🚗`);
} else {
    console.log(`Akhilesh is too young. Wait for another ${18 - age} years 😢`)
} */











/* let country = "India";
let continent = "Asia";
let population = 20;

if(population > 33){
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`)
}

//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jones'));
console.log(typeof NaN);

console.log(String(23), 23) */


//type coersion
/* console.log("I am " + 23 + " years old");
console.log("I am " + String(23) + " years old");

console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '10');
console.log('23' / '10');

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + '5');
console.log('10' - '4' - '3' - 2 + '5')

 */

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Akhilesh'));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if(money){
    console.log("Don't spend it all");
} else {
    console.log("You should get a job")
}

let heigth;
if(heigth){
    console.log("YAY heigth is defined");
} else {
    console.log("Height is UNDEFINED");
} */



/* console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2); */


/* const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("Yes you can driver the car");
} else {
    console.log("No you cannot drive the car");
} */




/* 
const country = 'India'
const language = 'English';
const numberOfPeople = 45;
const isIsland = false;

if (language === 'English' && numberOfPeople < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
} */





/* const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 123) / 3;
console.log(`Dolphins average is ${avgDolphins}`);
console.log(`Koalas average is ${avgKoalas}`);

if(avgDolphins > avgKoalas && avgDolphins > 100){
    console.log("Dolphins are the winner");
} else if(avgDolphins < avgKoalas && avgKoalas > 100){
    console.log("Koalas are the winner");
} else if (avgDolphins === avgKoalas) {
    console.log("Match is draw") 
} */










/* switch(day){
    case "Monday" : //day === "Monday"
        {console.log("Do DSA practice");
        console.log("Do bicep exercises");}
        
    case "Tuesday" :
        {console.log("Have fun and do not stress");}
        
    case "Wednesday" :
    case "Thrusday":
        console.log("On Wednesday and Thrusday do some MERN projects");
    case "Friday" :
        console.log("Have a party for the weekend");
    case "Saturday" :
    case "Sunday" : 
        console.log("Give time to the family on Saturday and Sunday");
    default : 
        console.log("Not a valid day of the week");
} */
/* 
const day = "Monday";

if (day === "Monday") {
    console.log("Do DSA practice");
    console.log("Do bicep exercises");
} else if (day === "Tuesday"){
    console.log("Have fun and do not stress");
} else if (day === "Wednesday" || day === "Thrusday") {
    console.log("On Wednesday and Thrusday do some MERN projects");
} else if (day === "Friday") {
    console.log("Have a party for the weekend");
} else if (day === "Saturday" || day === "Sunday") {
    console.log("Give time to the family on Saturday and Sunday");
} else if (day === "Monday") {
    console.log("Not a valid day of the week");
} */






/* const language = "Chinese";

switch(language){
    case "Chinese" :
    case "Mandarin" :
        console.log("MOST number of native speakers!");
        break;
    case "Spanish" :
        console.log("2nd place in number of native speakers");
        break;
    case "English" :
        console.log("3rd place");
        break;
    case "Hindi" :
        console.log("Number 4");
        break;
    case "Arabic" :
        console.log("5th most spoken language");
        break;
    default :
        console.log("Great language too ✌")
} */




/* const age = 19;

let drink = (age >= 14) ? "Wine" : "Water";
console.log(drink);

let drink2;
if(age >= 14){
    drink2 = "Wine";
} else {
    drink2 = "Water";
}
console.log(drink2);

console.log(`I like to drink ${(age >= 14) ? "Wine" : "Water"}`) */


/* let population = 40;
console.log(`India's population is ${(population >= 33) ? "above" : "below"} average`); */




/* 
const bill = 275;
const tip = (bill > 50 && bill < 300) ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`) */
/* 'use strict'
document.getElementById('para').innerText = `
let private = "hey"`;


let private = "hey";
const hello = "hello";
const hey = 12 */



/* "use strict";
function processJuice(apples, oranges){
    console.log(`The number of apples is ${apples} and the number of oranges are ${oranges}`);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const juiceMix = processJuice(5, 2);
console.log(juiceMix);
// reusing the function again
const onlyAppleJuice = processJuice(4, 0);
console.log(onlyAppleJuice); */


/* "use strict";
function describeCountry(country, population, capitalCity){
    const describe = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return describe;
}

console.log(describeCountry("India", 300, "Delhi"));
console.log(describeCountry("USA", 200, "Washington DC"));
console.log(describeCountry("England", 100, "London")); */






/* //function Declaration
function calcAge1(birthYear){
    return 2023 - birthYear;
}

console.log(calcAge1(1999));

//Function Expression with anonymous function
const age1 = function (birthYear){
    return 2023 - birthYear;
}

const currentAge1 = age1(1999);
console.log(currentAge1);

//fucntion expression with named function
const age2 = function getAge(birthYear) {
    return 2023 - birthYear;
}

const currentAge2 = age2(1999);
console.log(currentAge2); */

/* 

const calcAge = birthYear => 2023 - birthYear;
const age = calcAge(1999);
console.log(age);

const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1999));

const yearsUntilRetirementName = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} has ${retirement} years of retirement`;
}

console.log(yearsUntilRetirementName(1999, "Akhilesh"));
console.log(yearsUntilRetirementName(1990, "Mohit")); */

/* 
"use strict"
const worldPopulation = 7900;
//using Arrow function

let percentageOfWorld3 = (population, country) => {
    return`${country}'s population is ${(population * 100) / worldPopulation}% of world population`;
}

console.log(percentageOfWorld3(800, "India"));
console.log(percentageOfWorld3(600, "USA"));
console.log(percentageOfWorld3(200, "UK"));
 */









/* "use strict";
function cutFruit(fruit){
    return fruit * 4;
}

function processJuice(apples, oranges) {
    const applesPieces = cutFruit(apples);
    const orangesPieces = cutFruit(oranges);

    const juice = `Juice with ${applesPieces} pieces of apples and ${oranges} pieces of  oranges.`;
    return juice;
}

console.log(processJuice(5, 2));  */



/* "use strict"
function percentageOfWorld(population){
    return (population * 100) / 7900;
}

function describePopulation(country, population){
    return `${country} has ${population} million people, which is about ${percentageOfWorld(population)}% of the world`
}

console.log(describePopulation("India", 2000)); */

/* 

"use strict"

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphine win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else {
        console.log("Draw")
    }
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas) */



/* "use strict"
const friend1 = "Akhilesh";
const friend2 = "Maya";
const friend3 = "Heena";

//Literal Syntax
const friend = ["Akhilesh", "Maya", "Heena"];
console.log(friend);

const years = new Array(122, 232, "Akhilesh");
console.log(years); */

/* 
"use strict"
const friends = ["Akhilesh", "Maya", "Heena"];

//Accessing the elements
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[friends.length - 1]);

//Changing the elements
friends[2] = "Manya";

console.log(friends); */


/* "use strict"
const friends = ["Akhilesh", "Maya", "Heena"];

friends[2] = "Jasmine";
console.log(friends);

friends = ["Akhilesh", "Manya"]

console.log(friends); */


/* "use strict"
const firstName = "Akhilesh";
const friends = ["Manya", "Maya", "Heena"];

const mixedArray = [firstName, "Coding", 2023 - 1999, "Developer", friends];
console.log(mixedArray); */



/* 
"use strict"
const calcAge = function(birthYear){
    return 2023 - birthYear;
}

const years = [1999, 2001, 1995];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(age); */


/* "use strict"
const population = [2000, 2500, 5000, 4000];
console.log(population);

function percentageOfWorld(population){
    return (population * 100) / 7900;
}

const percentages = [percentageOfWorld(population[0]), percentageOfWorld(population[1]), percentageOfWorld(population[2],           percentageOfWorld(population[3]))];
console.log(percentages); */







/* "use strict"
const friends = ["Maya", "Manya", "Heena"];

//Adding the elements from end
const newLength = friends.push("Monisha");
console.log(newLength);
console.log(friends);

//Adding elements from front
const newLengthFront = friends.unshift("Anshika");
console.log(newLengthFront);
console.log(friends);

//Deleting elements from end
const lastRemovedElement = friends.pop();
console.log(lastRemovedElement);
console.log(friends);

//Deleting elements from the front
const frontElementRemoved = friends.shift();
console.log(frontElementRemoved);
console.log(friends); */

/* 

"use strict"
const friends = ["Maya", "Manya", "Heena"];

console.log(friends.indexOf("Maya"));
console.log(friends.indexOf("Heena"));
console.log(friends.indexOf("Akhilesh"));

console.log(23)
console.log(friends.includes("Maya"));
console.log(friends.includes("Heena"));
console.log(friends.includes("23"));

if(friends.includes("Manya")){
    console.log(`You have a friend called Manya`);
} */


/* "use strict"
const neighbours = ["USA", "UK", "Norway"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(neighbours.includes("Germany") == false){
    console.log(`Probably not a central European country 😂`);
}

neighbours[neighbours.indexOf("USA")] = "India";

console.log(neighbours); */





/* 

"use strict"
const calcTip = bill => {
    if(bill >= 50 && bill <= 300){
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

const bills = [125, 555, 44];
console.log(`Bills are ${bills}`);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(`Tips are ${tips}`);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(`Total is ${total}`); */





/* "use strict"
const akhiData = {
    "First Name" : "Akhilesh",
    Job : "Coding",
    Age : 2023 - 1999,
    "Expert In" : "JavaScript",
    Know: ["Node.js", "React.js", "JavaScript"]
};

console.log(akhiData) */






/* "use strict"
const myCountry = {
    Country : "India",
    CapitalCity : "Delhi",
    Language : "Hindi",
    Population : "150 Crores",
    Neighbours : ["Pakistan", "Nepal", "Bhutan", "Bangladesh"]x
}

console.log(myCountry);

console.log(myCountry.Country);

console.log(myCountry["Country"]);

const cityKey = "City";
console.log(myCountry["Capital" + cityKey]);
console.log(myCountry[`Capital${cityKey}`]); */


/* "use strict"
const myCountry = {
    Country: "India",
    CapitalCity: "Delhi",
    Language: "Hindi",
    Population: "150 Crores",
    Neighbours: ["Pakistan", "Nepal", "Bhutan", "Bangladesh"]
}

const interestIn = prompt("What do you want to know about the country, Choose between Country, CapitalCity, Language, Population, Neighbours");

console.log(myCountry.interestIn);
console.log(myCountry[interestIn]); */






/* 
"use strict"
const myCountry = {
    Country: "India",
    CapitalCity: "Delhi",
    Language: "Hindi",
    Population: "150 Crores",
    Neighbours: ["Pakistan", "Nepal", "Bhutan", "Bangladesh"]
}

console.log(`${myCountry["Country"]} has ${myCountry["Neighbours"].length } neighbours, and his son is called ${myCountry["Neighbours"][0]}`)

console.log(`${myCountry.Country} has ${myCountry.Neighbours.length} neighbours, and his son is called ${myCountry.Neighbours[0]}`); */



/* "use strict"
const myCountry = {
    Country: "India",
    CapitalCity: "Delhi",
    Language: "Hindi",
    Population: "150 Crores",
    Neighbours: ["Pakistan", "Nepal", "Bhutan", "Bangladesh"]
}

console.log(`${myCountry.Country} has ${myCountry.Population} ${myCountry.Language}-speaking people, ${myCountry.Neighbours.length} neighbouring countries and a capital called ${myCountry.CapitalCity}`);

console.log(`${myCountry["Country"]} has ${myCountry["Population"]} ${myCountry["Language"]}-speaking people, ${myCountry["Neighbours"].length} neighbouring countried and a capital called ${myCountry["CapitalCity"]}`);

myCountry.Population = "152 Crores";
console.log(`${myCountry.Population} `);

myCountry["Population"] = "150 Crores";
console.log(`${myCountry["Population"]} `); */

/* 
"use strict"
const myCountry = {
    Country: "India",
    CapitalCity: "Delhi",
    Language: "Hindi",
    Population: 150,
    Neighbours: ["Pakistan", "Nepal", "Bhutan", "Bangladesh"],

    PercentageOfWorldPopulation : function (){
        this.PercentageOfWorld = (this.Population * 100) / 700;
        return this.PercentageOfWorld;
    }
}

console.log(myCountry.PercentageOfWorldPopulation());
console.log(myCountry.PercentageOfWorld);
console.log(myCountry.PercentageOfWorld);
/* /* console.log(myCountry.PercentageOfWorld); */



/* "use strict"
const akhiData = {
    "First Name": "Akhilesh",
    Job: "Coder",
    birthYear: 1999,
    "Expert In": "JavaScript",
    Know: ["Node.js", "React.js", "JavaScript"],
    hasDriversLicense: false,

    calcAge : function(){
        this.Age = 2023 - this.birthYear;
        return this.Age;
    },

    Describe : function(){
        return `${this["First Name"]} is a ${this.calcAge()}-year old ${this.Job}, and he has ${this.Age >= 18 ? "a":"not"} driver's license`;
    }
};

//Chalenge : 
//"Akhilesh is a 23-year old Coder, and he has a/not driver's license";

console.log(akhiData.Describe());
 */


/* 

"use strict"
const myCountry = {
    Country: "India",
    CapitalCity: "Delhi",
    Language: "Hindi",
    Population: 150,
    Neighbours: ["Pakistan", "Nepal", "Bhutan", "Bangladesh"],
    PercentageOfWorldPopulation: function () {
        this.PercentageOfWorld = (this.Population * 100) / 700;
        return this.PercentageOfWorld;
    },
    Describe : function(){
        return `${this.Country} has ${this.Population} million ${this.Language}-speaking people, ${this.Neighbours.length} neighbouring countries and a capital called ${this.CapitalCity}`;
    },
    checkIsland : function(){
        this.isIsland = this.Neighbours.length > 0 ? false : true;
        return this.isIsland;
    }
}

console.log(myCountry.Describe());

console.log(`Is my country is Island : ${myCountry.checkIsland()}`); */





/* 
"use strict"
const MarkObject = {
    Name : "Mark",
    Mass : 78,
    Height : 1.69,
    calcBMI : function(){
        this.BMI = this.Mass / (this.Height ** 2);
        return this.BMI
    }
}

const JohnObject = {
    Name : "John",
    Mass : 92,
    Heigth : 1.95,
    calcBMI : function(){
        this.BMI = this.Mass / (this.Heigth * this.Heigth);
        return this.BMI;
    }
}

if(MarkObject.calcBMI() > JohnObject.calcBMI()){
    console.log(`Mark's BMI (${MarkObject.BMI}) is higher than John's (${JohnObject.BMI})`);
} else {
    console.log(`John's BMI (${JohnObject.BMI}) is higher than Mark;s (${MarkObject.BMI})`);
} */











/* 
"use strict"
for(let rep = 1 ; rep <= 10 ; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
} */




/* 
for(let voter = 1 ; voter <= 50 ; voter++){
    console.log(`Voter number ${voter} is currently voting`);
}
 */












/* 
"use strict"
const mixedArray = [
    "Akhilesh", 
    "Coder", 
    2023 - 1999, 
    "Developer", 
    ["Manya", "Heena", "Maya"]
];

const types = [];

for(let i = 0 ; i < mixedArray.length ; i++){
    console.log(mixedArray[i], "-", typeof mixedArray[i]);

    types[i] = typeof mixedArray[i]
}

console.log(types); */






/* "use strict"
const mixedArray = [
    "Akhilesh",
    "Coder",
    2023 - 1999,
    "Developer",
    ["Manya", "Heena", "Maya"]
];

console.log("----- ONLY STRINGS -----");
for(let i = 0 ; i < mixedArray.length ; i++){
    if(typeof mixedArray[i] !== 'string') continue;

    console.log(mixedArray[i], typeof mixedArray[i]);
}

console.log("----- BREAK WHEN NUMBER -----");
for(let i = 0 ; i < mixedArray.length ; i++){
    if (typeof mixedArray[i] === 'number') break;

    console.log(mixedArray[i], typeof mixedArray[i]);
} */














/* "use strict"
const population = [1000, 2000, 2300, 4000];
const percentages = [];

for(let i = 0 ; i < population.length ; i++){
    percentages[i] = (population[i] * 100) / 7900;
}

console.log(percentages); */


/* 

"use strict"
const mixedArray = [
    "Akhilesh",
    "Coder",
    2023 - 1999,
    "Developer",
    ["Manya", "Heena", "Maya"]
];

for(let i = mixedArray.length - 1 ; i >= 0 ; i--){
    console.log(i, mixedArray[i]);
}
 */



/* "use strict"
for(let exercise = 1 ; exercise <= 3 ; exercise++){
    console.log(`Starting exercise ${exercise}`);

    for(let repetition = 1 ; repetition <= 5 ; repetition++){
        console.log(`Lifting weight repetition ${repetition}`);
    }
} */







/* "use strict"
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for(let i = 0 ; i < listOfNeighbours.length ; i++){
    for(let j = 0 ; j < listOfNeighbours[i].length ; j++){
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
} */






/* "use strict"
let rep = 1;
while(rep <= 5){
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
} */




/* "use strict"
let dice = Math.trunc(Math.random() * 6 )+ 1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if(dice === 6){
        console.log("Ohh Shit!!! 6 finally come");
    }
} */




/* "use strict"
const population = [1000, 2000, 2300, 4000];
const percentages = [];

let i = 0;
while (i < population.length) {
    percentages[i] = (population[i] * 100) / 7900;
    i++;
}

console.log(percentages); */








/* "use strict"
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const calcTip = bill => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
}
for(let i = 0 ; i < 10 ; i++){
    tips[i] = calcTip(bills[i]);
    total[i] = bills[i] + tips[i];
}
const calcAverage = (arr) => {
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++){
        sum = sum + arr[i];
    }

    return sum / arr.length;
}

console.log(`The bills ${bills} and the average is ${calcAverage(bills)}`);
console.log(`The tips are ${tips} and the average is ${calcAverage(tips)}`);
console.log(`The total are ${total} and the average is ${calcAverage(total)}`); */











"use strict"





let x = 10;
