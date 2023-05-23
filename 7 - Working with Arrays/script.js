/* 'use strict';

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

const displayMovements = function (movs, sort = false) {
  containerMovements.innerHTML = '';

  const movements = sort ? movs.slice().sort((a, b) => a - b) : movs;

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

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur);

  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const inte = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, interest) => acc + interest);

  labelSumInterest.textContent = `${Math.abs(inte)}`;
};

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

const UpdateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

//Login functionality
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI methods
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear fields
    inputLoginUsername.value = inputLoginPin.value = '';
    //Remove focus ie blinking cursor on the PIN
    inputLoginPin.blur();

    UpdateUI(currentAccount);
  }
});

//Implementing the transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferTo.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    UpdateUI(currentAccount);
  }
});

//Implementing the close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const confirmUser = inputCloseUsername.value;
  const confirmPin = Number(inputClosePin.value);

  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();

  if (
    confirmUser === currentAccount.username &&
    confirmPin === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //Delete Account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
});

//Implementing the loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';
  inputLoanAmount.blur();

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    UpdateUI(currentAccount);
  }
});

//Implementing the sorting of the movements
let toSort = true;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, toSort);
  toSort = !toSort;
});

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

/*   */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Equality
console.log(movements.includes(-130));

//SOME
console.log("----------------SOME");
//Condition
console.log(movements.some(mov => mov === -130));

const anyDepositsAbove5000 = movements.some(mov => mov > 5000);
console.log(anyDepositsAbove5000);

//EVERY
console.log('----------------EVERY');
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0)); */

//Using separate callback for DRY

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit)); */

/* //FLAT
console.log('---------FLAT');
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[1, [2, 3]], [[4, 5, 9], 6], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

//All accounts movements in 1 array
//---------WITHOUT CHAINING
const accountsMovements = accounts.map(acc => acc.movements);
console.log(accountsMovements);
const flatAcc = accountsMovements.flat();
console.log(flatAcc);
const total = flatAcc.reduce((acc, mov) => acc + mov);
console.log(total);

//---------WITH CHAINING
const movTotal = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);
console.log(movTotal);

//FLATMAP
console.log('----------------FLATMAP');
const movTotal1 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov);
console.log(movTotal1); */

/* console.log('------------NUMBERS');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('-----ASCENDING');
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

console.log('-----DESCENDING');
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements);

console.log('-----COMPACT WAY');
movements.sort((a, b) => a - b);
console.log(movements);
 */

/* const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

console.log('------EMPTY ARRAY WITH FILL FUNCTION');
const x = new Array(7);
console.log(x);

x.fill(1);
console.log(x);
x.fill(-2, 3);
console.log(x);
x.fill(69, 2, 6);
console.log(x);

console.log('------ARRAY from() method');
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z); */

/* labelBalance.addEventListener('click', ()=>{
  const movementUI = Array.from(document.querySelectorAll(".movements__value")).map(ele => Number(ele.textContent.replace('€', '')));

  const movementUI = Array.from(
    document.querySelectorAll('.movements__value'),
    ele => Number(ele.textContent.replace('€', ''))
  );

  console.log(movementUI);
}) */

/* //FIND TOTAL BANK DEPOSITS
const bankDepositsSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankDepositsSum);

//Number of deposits greater than 1000
const deposit1000Num1 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000)
  .reduce((acc, mov, i) => (acc = i + 1));
console.log(deposit1000Num1);

const deposit1000Num = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length;

console.log(deposit1000Num);

const deposit1000Num2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, mov) => (mov > 1000 ? count + 1 : count), 0);

console.log(deposit1000Num2); */

/* //CRAZY case of reduce method
const finalSums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      cur > 0 ? (sum.deposits += cur) : (sum.withdrawals += Math.abs(cur));

      sum[cur > 0 ? 'deposits' : 'withdrawals'] += cur;

      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(finalSums);
 */

/* const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const tileCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');

  return tileCase;
};

console.log(convertTitleCase('this is a title string'));
console.log(convertTitleCase('here is the another title with EXAMPLE')); */

//asdf */

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

console.log('---------- TASK 8 ----------');
dogs.forEach(dog => {
  dog.recommendedFood = dog.weight * 0.75 * 28;
});

const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsCopy);

















/* console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

console.log('---------- TASK 6 ----------');
console.log(
  dogs.some(
    dog =>
      dog.curFood > 0.9 * dog.recommendedFood &&
      dog.curFood < 1.1 * dog.recommendedFood
  )
);

console.log('---------- TASK 7 ----------');

const okayDogs = dogs.filter(
  dog =>
    dog.curFood > 0.9 * dog.recommendedFood &&
    dog.curFood < 1.1 * dog.recommendedFood
);
console.log(okayDogs); */

/* const ownerEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownerEatTooMuch);

const ownerEatTooLitte = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownerEatTooLitte);

console.log(`${ownerEatTooMuch.join(' and ')}'s dogs eat too much!!!`)
console.log(`${ownerEatTooLitte.join(' and ')}'s dogs eat too little!!!`); */

/* dogs.forEach(dog => {
  dog.recommendedFood = dog.weight * 0.75 * 28;
});
console.log(dogs);

console.log('---------- TASK 2 ----------');
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  dogSarah.curFood > dogSarah.recommendedFood ? 'Too Much' : 'Too Little'
);

console.log('---------- TASK 3 ----------');
const ownerEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownerEatTooMuch);

const ownerEatTooLitte = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownerEatTooLitte);
 */
