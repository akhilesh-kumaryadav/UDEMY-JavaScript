'use strict';
/* 
 const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const akhilesh = new Person('Akhilesh', 1999);

Person.hey = function () {
  console.log("Hey there ✌");
  console.log(this);
};

Person.hey();
akhilesh.hey(); */

//console.log(akhilesh.hasOwnProperty('species'))

/* console.log(akhilesh);
console.log(akhilesh.__proto__);
console.log(akhilesh.__proto__.__proto__)
console.log(akhilesh.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor)
console.dir(Person.prototype.constructor); */

/* const arr = [1, 1, 3, 7, 5, 3, 4, 4];

Array.prototype.getUniqueElements = function(){
  return [...new Set(this)]
}

console.log(arr.getUniqueElements()); */

/* const h1 = document.querySelector('h1');
console.log(h1)
console.log(h1.__proto__);
console.log(h1.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);
console.log(
  h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
); */

/* const Car = function(make, speed){
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
}

Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(`${this.make} is braked and now going at ${this.speed}`);
}

const car1 = new Car('BMW', 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake();

car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake(); */

/* //class declaration
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.firstName}`);
  }
}

const akhilesh = new Person('Akhilesh', 1999);
console.log(akhilesh);
akhilesh.calAge();
console.log(akhilesh.__proto__ === Person.prototype);

Person.prototype.greet = function () {
  console.log(`Hey, ${this.firstName}`);
};

akhilesh.greet(); */

/* const account = {
  owner: 'Akhilesh',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements); */

//class declaration
/* class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  get age() {
    return 2037 - this.birthYear;
  }

  static hey() {
    console.log('Hey there ✌');
    console.log(this);
  }
}

const akhilesh = new Person('Akhilesh Kumar', 1999);

Person.hey();
akhilesh.hey(); */

/* const PersonProto = {
  calcAge() {
    console.log(2027 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const akhilesh = Object.create(PersonProto);
console.log(akhilesh);
akhilesh.name = 'Akhilesh';
akhilesh.birthYear = 2002;
akhilesh.calcAge();

const kumar = Object.create(PersonProto);
kumar.init("Kumar", 1999);
console.log(kumar)
kumar.calcAge(); */

/* class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make}'s speed after acceleration is ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make}'s speed after brake is ${this.speed}`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const Ford = new CarClass('Ford', 120);
console.log(`The speed of ${Ford.make} in US is ${Ford.speedUS}`);
Ford.accelerate();
Ford.accelerate();
Ford.brake();
Ford.speedUS = 50;
console.log(Ford); */

/* const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
const Student = function (firstName, birthYear, courseName) {
  Person.call(this, firstName, birthYear);
  this.courseName = courseName;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(
    `My name is ${this.firstName} and I study the course ${this.courseName}`
  );
};
const akhilesh = new Student('Akhilesh', 1999, 'Computer Science');
akhilesh.introduce(); 
akhilesh.calcAge();

console.log(akhilesh instanceof Student)
console.log(akhilesh instanceof Person);
console.log(akhilesh instanceof Object);

console.log(Student.prototype.constructor)
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor); */

/* class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge(){
    console.log(2037 - this.birthYear);
  }

  greet(){
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name){
    if(name.includes(" ")) this._fullName = name;
    else console.log(`${name} is not a full name!!!`)
  }

  get fullName(){
    return this._fullName;
  }

  static hey(){
    console.log(`Hey there ✌`)
  }
}

class StudentClass extends PersonClass {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first, ie call the super()
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `My name is ${this.fullName} and I study the course ${this.course}`
    );
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${2037 - this.birthYear - 10}`
    );
  }
}

const akhilesh = new StudentClass('Akhilesh Kumar', 1999, "Computer Science");
akhilesh.introduce();
akhilesh.calcAge(); */

/* const PersonProto = {
  calcAge() {
    console.log(2027 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const akhilesh = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear)
  this.course = course;
}

StudentProto.introduce = function(){
  console.log(
    `My name is ${this.firstName} and I study the course ${this.course}`
  );
}

const kumar = Object.create(StudentProto);
kumar.init("Kumar", 1999, "Computer Science");
kumar.introduce();
kumar.calcAge(); */
/* 
class Account {
  //PUBLIC fields (on INSTANCE not on PROTOTYPE)
  locale = navigator.language;

  //PRIVATE fields (on INSTANCE not on PROTOTYPE)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening the account, ${owner}`);
  }

  //PUBLIC Methods, just like API
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  getMovements(){
    return this.#movements;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }

    return this;
  }

  //PRIVATE method
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Akhilesh', 'INR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
//console.log(acc1.#movements);

//Chaining 
acc1.deposit(300).deposit(400).withdraw(200).requestLoan(25000).withdraw(5000);
console.log(acc1.getMovements()); */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make}'s speed after acceleration is ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make}'s speed after brake is ${this.speed}`);

    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make}'s speed after acceleration is ${
        this.speed
      }, with a charge of ${this.#charge}`
    );

    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();

console.log(rivian.speedUS);