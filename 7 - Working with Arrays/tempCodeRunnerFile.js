const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

console.log(movementsDescription);