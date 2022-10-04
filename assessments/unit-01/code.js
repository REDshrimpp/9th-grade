// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...

//1
const averageWeight = (a, b) => {
  return a / b
}

//2
const hypotenuse = (a, b) => {
  return a ** 2 + b ** 2
}

//3
const maxRadius = (a, b) => {
  return Math.min(a, b) / 2
}

//4
const numCircles = (a, b) => {
  return b / (a * 2)
}

//5
const offset = (a, b) => {
  return (a - b) / 2
}

//6
const canSleepIn = (a, b) => {
  return !a || b === true
}

//7
const canGoToProm = (a, b, c) => {
  return (a || b) && !c === true
}

//8
const getsSpeedingTicket = (a, b) => {
  if (a > 70) {
    return b || !b === true
  }
  else if (70 > a > 65) {
    return b === true
  }
  else
    return b || !b === false
}

//9
const moreThanTwiceAsLong = (a, b) => {
  if (a.length / 2 > b.length) {
  return true
  }
  else {
  return false
  }
}

//10
const aFartherThanB = (a, b , c) => {
  if (Math.abs(a - c) > Math.abs(b - c)) {
    return true
  }
  else
  return false
}

//11
const firstHalf = (a) => {
  return a.substring(0, a.length / 2)
}

//12
const secondHalf = (a) => {
  return a.substring(a.length/2, a.length)
}

//13
const upDown = (a) => {
  return a.toUpperCase + a
}