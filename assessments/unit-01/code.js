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
  a ** 2 + b ** 2
}

//3
const maxRadius = (a, b) => {
  Math.min(a, b) / 2
}

//4
const numCircles = (a, b) => {
  b / 2 * a
}

//5
const offset = (a,b) => {
  (b - a) / 2
}

//6
const canSleepIn = (a,b) => {
  !a || b === true
} 

//7
const canGoToProm = (a,b,c) => {
  a || b && !c === true
}

//8
const getsSpeedingTicket = (a,b) => {
  if (a>70) {
    b || !b === true
  }
  else if (70 > a > 65) {
    b === true
  }
  else
  b || !b === false
}

//9