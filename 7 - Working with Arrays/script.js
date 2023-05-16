'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((movement, index) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${movement} €</div>
      </div> 
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur);

  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const inte = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .reduce((acc, interest) => acc + interest);

  labelSumInterest.textContent = `${Math.abs(inte)}`;
};
calcDisplaySummary(account1.movements);

const createUsername = accounts => {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(word => word.at(0))
      .join('');
  });
};
createUsername(accounts);
//console.log(accounts)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]); */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; */

/////////////////////////////////////////////////

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

const movementUSD = movements.map(function (movement) {
  return movement * eurToUSD;
});

console.log(movementUSD);

const movementUSD2 = movements.map(movement => movement * eurToUSD);

console.log(movementUSD2);

const movementsDescription = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementsDescription); */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (movement) {
  return movement > 0;
});

console.log(deposits);

//Comparing with the for-of loop
const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);

console.log(depositFor);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal); */
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, cur, i, arr)=>{
  return acc + cur;
})

console.log(balance); */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const maxElement = movements.reduce((acc, cur)=>{
  if(acc > cur) return acc;
  else return cur;
}, movements[0]);

console.log(maxElement) */

/* const calcAverageHumanAge = function (ages) {
  const avg = ages
    .map(age => {
      if (age <= 2) return 2 * age;
      else return 16 + age * 4;
    })
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return avg;
};

const age1 = calcAverageHumanAge([5, 2, 4, 15, 8, 3]);
const age2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(age1);
console.log(age2); */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurUSD = 1.1;
console.log(movements);

const totalDepositUSD = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr);
    mov * eurUSD;
  })
  .reduce((acc, cur) => acc + cur);

console.log(totalDepositUSD);
 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(firstWithdrawal); 

console.log(accounts);

const account = accounts.find((acc => acc.owner === "Jessica Davis"));

console.log(account);