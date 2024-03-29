////////////////////////////////////////////////////////////////////////
// Scroll to the bottom to where it says "Write your code here ..." to actually
// write your code. Just above that is a list of Math functions that you might
// find useful. Everything before that you can safely ignore--I am providing
// functions and other constants you may need to use in our code but nothing
// that you need to change even necessarily understand the internals of. You
// will however need to understand how to use these functions and constants as
// described in the questions.

const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

/*
 * Log the object via console.log.
 */
const log = (x) => { console.log(x); }

/*
 * Record an okay object.
 */
const recordOk = (x) => { log(`OK: ${x}`); }

/*
 * Record a not-okay object.
 */
const recordNotOk = (x) => { log(`NOT OK: ${x}`); }

/*
 * Record a meh object.
 */
const recordMeh = (x) => { log(`MEH: ${x}`); }

/*
 * This one is some particular dark magic. Definitely don't worry about
 * what it's doing.
 */
const hash = (s) => {
  return [...JSON.stringify(s)]
    .reduce((hash, c) => ((hash << 5) + hash) + c.codePointAt(0), 5381);
};

/*
 * An arbitrary predicate on numbers you will use in one function.
 */
const isLeet = (n) => n % 1337 === 0;

/*
 * Return a random number between 0, inclusive, and 10,000, exclusive.
 */
const random10k = () => rand(10_000);

/*
 * Return true if the argument is "okay". This implementation treats roughly
 * half of all possible values as okay and the other half as not okay. Which are
 * which is essentially random but is stable.
 */
const isOk = (x) => hash(JSON.stringify(x)) % 2 == 0;

/*
 * Return true if the argument is "meh".
 */
const isMeh = (x) => !isOk(x) && hash(JSON.stringify(x)) % 3 == 0;

/*
 * Record a pair.
 */
const pair = (a, b) => {
  log(`pair: ${a},${b}`);
};

////////////////////////////////////////////////////////////////////////
// For your reference, here are some functions and constants from Math
// that you might find useful

// Math.PI - a constant giving the closest approximation of π available
// Math.abs(n) - a function that computes the absolute value of its argument
// Math.ceil(n) - a function that rounds its argument up to the nearest integer
// Math.floor(n) - a function that rounds its argument down to the nearest integer
// Math.max(a, b) - a function that returns the largest of its arguments
// Math.min(a, b) - a function that returns the smallest of its arguments
// Math.sqrt(n) - a function that returns the square root of its argument

////////////////////////////////////////////////////////////////////////
// Write your code here ...

//BOOLEANS

//1
const needHeavyCoat = (goingOutside, somewhereCold) => {
  return goingOutside && somewhereCold
}

//2
const needSunscreen = (goingToBeach, goingSkiing) => {
  return goingToBeach || goingSkiing
}

//3
const needMittens = (goingOutside, someWhereWarm) => {
  return goingOutside && !someWhereWarm
}

//4
const isVenomous = (isStriped, hasBlueHead) => {
  return isStriped || (!isStriped, !hasBlueHead)
}

//5
const okaySpeed = (speedLimit, carSpeed) => {
  return carSpeed <= speedLimit + 10 && carSpeed >= speedLimit - 10
}

//36
const getsSpeedingTicket = (carSpeed, copIsGrouchy) => {
  return carSpeed > 65 && copIsGrouchy || carSpeed > 70
}

//37
const evenGreaterThanZero = (number) => {
  return number > 0 && number % 2 === 0
}

//38
const isLeapYear = (year) => {
  return year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0)
}

//40
const twiceAsExpensive = (price1, price2) => {
  return price1 === price2 * 2
}

//41
const winningRecord = (wins, losses, ties) => {
  return wins > losses + ties
}

//STRINGS

//60
const middle = (string) => {
  return string.substring(string.length / 4, string.length / 4 * 3)
}

//61
const paire = (string1, string2) => {
  return string1 + ' and ' + string2
}

//62 
const containsX = (string) => {
  for (let x = 0; x < string.length; x++) {
    if (string[x] === 'x') {
      return true
    }
  }
  return false
}

//63
const slug = (string1, string2, string3) => {
  return string1.toLowerCase() + '-' + string2.toLowerCase() + '-' + string3.toLowerCase()
}

//64
const capitalize = (string) => {
  return string[0].toUpperCase() + string.substring(1, string.length).toLowerCase()
}

//65 NOTE
const capitalizeName = (fullName) => {
  return capitalize(fullName.substring(0, fullName.indexOf(' '))) + ' ' + capitalize(fullName.substring(fullName.indexOf(' ') + 1, fullName.length))
}



//CONTROL CONSTRUCTS

//74
const pairs = (number) => {
  for (let x = 1; x < number; x++) {
    for (let y = 1; y < number; y++) {
      pair(x, y)
    }
  }
}

//75
const timesTable = (number) => {
  for (let x = 1; x < number + 1; x++) {
    for (let y = 1; y < number + 1; y++) {
      emit(x, y, x * y)
    }
  }
}

//76
const sumSquares = (number) => {
  let result = 0
  for (let x = 0; x < number; x++) {
    result = result + x **2
  }
  return result
}

//77
const countXs = (string) => {
  let result = 0
  for (let x = 0; x < string.length; x++) {
    if (string[x] === 'x') {
      result += 1
    }
  }
  return result
}

//78
const makeRow = () => {
  return ['', '', '']
}

//79
const makeBoard = () => {
  return [makeRow(), makeRow(), makeRow()]
}



//ARRAYS

//80
const allTheSame = (arrayOfElements) => {
  return arrayOfElements[0] === arrayOfElements[1] && arrayOfElements[0] === arrayOfElements[2]
}

//81
const extractColumn = (board, index) => {
  return [board[0][index], board[1][index], board[2][index]]
}

//82
const fillTimesTable = (array) => {
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array[x].length; y++) {
      array[x][y] = (x + 1) * (y + 1)
    }
  }
  return array
}

//83 NOTE
const sums = (number) => {
  let array = [0]
  for (let x = 0; x < number; x++) {
    array.push(x + array[x])
  }
  return array
}

//84
const rule110 = (array) => {

}


//OBJECTS

//89
const isWinner = (player) => {
  return player.score > 100
}


//90
const updateWins = (playerList) => {
  for (let x = 0; x < playerList; x++) {
    if (isWinner(playerList[x])) {
      playerList[x].wins = playerList[x].wins + 1
    }
  }
}

//87
const totalWithTip = (receet, tip) => {
  return {subtotal: receet.subtotal, tip: receet.subtotal * tip, total: receet.subtotal + receet.subtotal * tip}
}

//88
const higherPaid = (employee1, employee2) => {
  if (employee1.salary > employee2.salary) {
    return employee1
  }
  else {
    return employee2
  }
}

//91
const bigWinners = (playerList) => {
  let result = []
  for (let x = 0; x < playerList.length; x++) {
    if (playerList[x].wins > 10) {
      result.push(playerList[x])
    }
  }
}