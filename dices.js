let rollDice = (n, sides = 6) => {

  let result = 0;

  for (let i = 0; i < n; i++) {

    result += Math.floor(sides * Math.random()) + 1;
  }

  return result;
}

let payback = (roll, bet = 0.5) => {

  switch(roll) {

    case 12:
      return bet * 3;

    case 11:
      return bet * 2;

    case 10:
      return bet;

    case 7:
    case 8:
    case 9:
      return 0;

    default:
      return -bet;
  }
}

let evaluateGame = (n) => {

  let money = 0.50;

  for (let i = 0; i < n; i++) {

    money += payback(rollDice(2));
  }

  return money;
}

const nGames = 1000;
const evaluation = evaluateGame(nGames);
console.log(`Return after ${nGames} games: ${evaluation} (${evaluation / nGames} per game)`);
console.log(`This game is${evaluation > 0 ? "" : "n't"} worth it!`);

const expected =
    1.5 * 1/36  // roll a 12
  + 1.0 * 2/36  // roll a 11
  + 0.5 * 3/36  // roll a 10
  + 0.0 * 4/36  // roll a 9
  + 0.0 * 5/36  // roll a 8
  + 0.0 * 6/36  // roll a 7
  - 0.5 * 5/36  // roll a 6
  - 0.5 * 4/36  // roll a 5
  - 0.5 * 3/36  // roll a 4
  - 0.5 * 2/36  // roll a 3
  - 0.5 * 1/36; // roll a 2

console.log(`Calculated expected return based on probabilities: ${expected} per game`);
