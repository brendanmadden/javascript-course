"use strict";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Constructor Functions and the new Operator //////////////////////////////////////////////////////////////////////
/*
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER DO THIS
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };

  Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey(); // This is an example of a static method

const brendan = new Person(`Brendan`, 1991);
console.log(brendan);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
const john = new Person(`john`, 2017);
const jill = new Person(`jill`, 1867);

console.log(john, jill);
console.log(brendan instanceof Person);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Prototypes //////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

brendan.calcAge();

console.log(brendan.__proto__);
console.log(brendan.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(brendan));
console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(Person));
Person.prototype.hello = function () {
  console.log(`hello`);
};
console.log(brendan.prototype);
console.log(Person.prototype);
console.log(Person);
brendan.hello();
console.log(brendan.__proto__);
console.log(Person.__proto__);

Person.prototype.species = `Human`;

console.log(brendan.hasOwnProperty(`firstName`));
console.log(brendan.hasOwnProperty(`species`));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Prototypal Inheritance on Built-In Objects //////////////////////////////////////////////////////////////////////

//Object.prototype (top of prototype chain)
console.log(brendan.__proto__.__proto__);
console.log(brendan.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3, 5, 7, 7, 8, 2, 1];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

// Don't actually do this in practice - this is just for fun
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector(`h1`);
console.dir(h1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge 1 //////////////////////////////////////////////////////////////////////////////////////////////

// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

// 4. Create 2 'Car 'objects and experiment wit hcalling 'accelerate' and 'brake' multiple times on each of them

const car1 = new Car(`Honda`, 75);
const car2 = new Car(`BMW`, 120);
const car3 = new Car(`Mercedes`, 95);
console.log(car1.speed);
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
console.log(car2.speed);
car2.accelerate();
car2.brake();
console.log(car3.speed);
car3.accelerate();
car3.brake();

console.log(car1.accelerate);
console.log(car1.brake);

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ES6 Classes /////////////////////////////////////////////////////////////////////////////////////////////////////

// // Class Expression
// const PersonClassExp = class {

// }

// Class Declaration
class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods
  // These methods go onto PersonClass.prototype (.prototype property of PersonClass)
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.fullName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  // Set a property that already exists
  // Essentially creating a validation here for fullName when a new objext is created
  set fullName(name) {
    if (name.includes(` `)) this._fullName = name;
    else console.log(`Not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there 👋");
    console.log(this);
  }
}
PersonClass.hey();

const jessica = new PersonClass(`Jessica Davis`, 1987);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonClass.prototype);

// You can still add methods to the prototype like this
// PersonClass.prototype.greet = function () {
//   console.log(`hey ${this.fullName}`);
// };

jessica.greet();
console.log(jessica.age);

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonClass(`Walter White`, 1965);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Getters and Setters /////////////////////////////////////////////////////////////////////////////////////////////
const account = {
  owner: "Jonas",
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
console.log(account.movements);

class Testcar {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  newCar() {
    console.log(`Here is your new ${this.year} ${this.make} ${this.model}`);
  }
}

const bmw = new Testcar(`BMW`, `M3`, `2023`);
const mercedes = new Testcar(`Mercedes`, `AMG S Class`, `2023`);
const audi = new Testcar(`Audi`, `R8`, `2023`);
const rolls = new Testcar(`Rolls Royce`, `Ghost`, `2023`);

bmw.newCar();
mercedes.newCar();
audi.newCar();
rolls.newCar();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Object.create ///////////////////////////////////////////////////////////////////////////////////////////////////
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2 /////////////////////////////////////////////////////////////////////////////////////////////

class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`New speed is ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`New speed is ${this.speed}`);
  }

  get speedUS() {
    this.speed /= 1.6;
    console.log(`US speed is ${this.speed}mi/h`);
    return this.speed;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    return this.speed;
  }
}

const test = new CarClass(`test`, 100);
console.log(test);
test.accelerate();
console.log(test);
test.brake();
console.log(test);
test.speedUS;
test.speedUS = 50;
console.log(test);

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl("Ford", 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions ////////////////////////////////////////////////////////////

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // call sets this to Person
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3 /////////////////////////////////////////////////////////////////////////////////////////////

const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `The ${this.make} is going at ${this.speed}km/h and has a charge of ${this.charge}%`
  );
};

const tesla = new EV(`Tesla`, 160, 50);
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(100);
tesla.accelerate(); // EV Tesla using it's own accelerate method is an example of polymorphism because Car also has an accelerate method
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
console.log(tesla.__proto__);
console.log(EV.prototype.constructor);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes //////////////////////////////////////////////////////////////////////

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there 👋");
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": Object.create ////////////////////////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Encapsulation: Protected Properties and Methods /////////////////////////////////////////////////////////////////
// Encapsulation: Private Class Fields and Methods ////////////////////////////////////////////////////////////////

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}!`);
  }

  // Public Interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account(`Jonas`, `EUR`, 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);
