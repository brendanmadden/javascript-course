"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;
  const outflows = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(outflows)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .filter((mov) => mov >= 1)
    .reduce((acc, mov) => acc + mov);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map((name) => name[0])
      .join(``);
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Calculate and Display Movements
  displayMovements(acc.movements);

  //  Calculate and Display Balance
  calcDisplayBalance(acc);

  // Calculate and Display Summary
  calcDisplaySummary(acc);
};

// Event Handlers
let currentAccount;

btnLogin.addEventListener(`click`, function (e) {
  // Prevent form from submitting and page refreshing (default)
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Welcome Message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginPin.blur();
    inputLoginUsername.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = ``;

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = ``;
});

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = ``;
});

let sorted = false;
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
const arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(0, 3));
console.log(arr);

console.log(arr.splice(3, 1));
console.log(arr);


/////////////////////////////////////////////////
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));


///////////////////////////////////////
// The new at Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));


///////////////////////////////////////
// Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("---- FOREACH ----");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

///////////////////////////////////////
// forEach With Maps and Sets
// Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});


///////////////////////////////////////
// Coding Challenge #1

// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data[4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data[10, 5, 6, 1, 4]

// const juliaData1 = [3, 5, 2, 12, 7];
// const kateData1 = [4, 1, 15, 8, 3];
const juliaData1 = [9, 16, 6, 8, 3];
const kateData1 = [10, 5, 6, 1, 4];

const checkDogs = function (juliaData, kateData) {
  const juliaData1Copy = juliaData.slice();
  console.log(juliaData1Copy);
  const juliaSplice1 = juliaData1Copy.splice(1).splice(0, 2);
  // const correctedBoth = [...juliaSplice1, ...kateData];
  const correctedBoth = juliaSplice1.concat(kateData);
  console.log(correctedBoth);

  correctedBoth.forEach(function (age, i) {
    if (age >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult good boy and is ${age} years young! 🐶`
      );
    } else {
      console.log(
        `Dog number ${i} is a good boy little puppy and is ${age} years young! 🐶`
      );
    }
  });
};
checkDogs(juliaData1, kateData1);


///////////////////////////////////////
// The map Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return Math.trunc(mov * eurToUsd);
// });

const movementsUSD = movements.map((mov) => Math.trunc(mov * eurToUsd));

console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map((name) => name[0])
      .join(``);
  });
};

// const user = `Steven Thomas Williams`;

createUsernames(accounts);
console.log(accounts);


///////////////////////////////////////
// The filter Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(deposits, withdrawals);

const accountsBalance = movements.reduce(function (accumulator, curr, i, arr) {
  console.log(`${i} ${accumulator}`);
  return accumulator + curr;
}, 0);
// console.log(accountBalance);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(accountsBalance);

const check = movements.reduce(function (acc, mov, i, arr) {
  if (mov > acc) {
    acc = mov;
  }
  return acc;
}, movements[0]);
console.log(check);

///////////////////////////////////////
// The filter Method
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


///////////////////////////////////////
// The reduce Method
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);



///////////////////////////////////////
// Coding Challenge #2

// const ages = [5, 2, 4, 1, 15, 8, 3];

// const calcAvgHumanAge = function (ages) {
//   const humanAges = ages.map((age) =>
//     age <= 2 ? (age = 2 * age) : (age = 16 + age * 4)
//   );
//   console.log(humanAges);

//   const olderDogsHumanAges = humanAges.filter((age) => age > 18);
//   console.log(olderDogsHumanAges);

//   const avgOlderDogAgeInHuman = olderDogsHumanAges.reduce(
//     (acc, cur, i, arr) => acc + cur / arr.length,
//     0
//   );

//   return avgOlderDogAgeInHuman;
// };

// const avg1 = calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter((age) => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

///////////////////////////////////////
// The Magic of Chaining Methods
const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);


///////////////////////////////////////
// Coding Challenge #3

const ages = [5, 2, 4, 1, 15, 8, 3];

const calcAvgHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? (age = 2 * age) : (age = 16 + age * 4)))
    .filter((age) => age > 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const avg1 = calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const totalDepositsInUSD = Math.trunc(
  movements
    .filter((mov) => mov > 0)
    .map((mov) => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0)
);
console.log(totalDepositsInUSD);

// var mergeTwoLists = function (list1, list2) {
//   const list3 = [...list1, ...list2];
//   list3.sort();
//   return list3;
// };

// var mergeTwoLists = function (list1, list2) {
//   let list3 = [];
//   for (let i = 0; i < list1.length; i++) {
//     list3.push(list2[i]);
//     list3.push(list1[i]);
//   }
//   list3.sort();
//   return list3;
// };

// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

const account = accounts.find((acc) => acc.owner === `Jessica Davis`);
console.log(account);

for (const acc of accounts) {
  if (acc.owner === `Jessica Davis`) {
    console.log(acc);
  }
}

///////////////////////////////////////
// The find Method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


///////////////////////////////////////
// some and every
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


///////////////////////////////////////
// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);



///////////////////////////////////////
// Sorting Arrays

// Strings
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);



///////////////////////////////////////
// More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Generate an array of 100 random dice rolls

const randomDiceRolls = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(randomDiceRolls);



var twoSum = function (nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
      if (nums[i] + nums[j] === target) {
        output.push(i, j);
        return output;
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



// O(n) => the below is much faster than the above
var twoSum = function (nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var n = nums[i];
    console.log(map[target - n]);
    if (map[target - n] >= 0) {
      return [map[target - n], i];
    } else {
      map[n] = i; //use map to store the value and index position
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

*/

///////////////////////////////////////
// Array Methods Practice

// 1.
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0); // ++ before the value returns the incremented or decremented value. ++ after the value (as we used to always see it) increments or decrements the value, but returns the previous value.
