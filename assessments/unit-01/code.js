// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...

//1
const averageWeight = (totalWeight, numberOfItems) => {
  return totalWeight / numberOfItems
}

//2
const hypotenuse = (aLength, bLength) => {
  return Math.sqrt(aLength ** 2 + bLength ** 2) 
}

//3
const maxRadius = (drawingAreaWidth, drawingAreaHeight) => {
  return (Math.min(drawingAreaWidth, drawingAreaHeight) / 2)
}

//4
const numCircles = (circleRadius, drawingAreaWidth) => {
  return Math.floor(drawingAreaWidth / (circleRadius * 2))
}

//5
const offset = (drawingAreaWidth, figureWidth) => {
  return (drawingAreaWidth - figureWidth) / 2
}

//6
const canSleepIn = (isWeekday, onVacation) => {
  return !isWeekday || onVacation === true
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
const aFartherThanB = (a, b, c) => {
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
  return a.substring(a.length / 2, a.length)
}

//13
const upDown = (a) => {
  return a.toUpperCase() + a
}

//14
const everyOther = (a) => {
  let x = 0
  if (a.length > 4) {
    for (x = 0; x < a.length; x + 2) {
      return a[x]
    }
  }
}

