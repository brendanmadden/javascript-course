"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(starterIndex, mainIndex, address, time);
  },

  openingHours: {
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
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}! Enjoy :)`
    );
  },
};

////////////////////////////////////////////////
// THE SPREAD OPERATOR
/*
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArray = [1, 2, ...arr];
console.log(newArray);
console.log(...newArray); // = writing 1, 2, 7, 8, 9

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join two or more arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: Arrays, strings, maps, sets, NOT objects
const str = `Brendan`;
const letters = [...str];
console.log(letters);
console.log(...str);

//Real World Example
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];
// restaurant.orderPasta(...ingredients);

//Objects - the spread operator works onn objects even though they aren't iterables
const newRestaurant = { foundedIn: 2025, ...restaurant, founder: `Brendan` };
console.log(newRestaurant);

// Another way to copy objects - see how when we change the name of the new object, the original doesn't also change, so it's a real copy - a new object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = `New Name`;
console.log(restaurant.name);
console.log(restaurantCopy.name);

////////////////////////////////////////
//DESTRUCTURING OBJECTS


restaurant.orderDelivery({
  time: `22:30`,
  address: `Via Del Sol, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant; //DESTRUCTURING OBJECT
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags, // giving the properties new variable names
} = restaurant;

//SET DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//NESTED OBJECTS
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/*
////////////////////////////////////////
// DESTRUCTURING ARRAYS
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // DESTRUCTURING ASSIGNMENT
console.log(x, y, z);
console.log(arr);

// const [main, secondary] = restaurant.categories; // Italian Pizzeria
let [main, , secondary] = restaurant.categories; // Italian Vegetarian
console.log(main, secondary);

//Switch the two dishes (values) without destructuring
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// With desctructuring

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// Recieve two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// NESTED DESTRUCTURING
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested; // NESTED DESTRUCTURING
console.log(i, j, k);

//DEFAULT VALUES
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/
