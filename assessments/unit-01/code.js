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
const canGoToProm = (isSenior, invitedBySenior, onPromExlusionList) => {
  return (isSenior || invitedBySenior) && !onPromExlusionList === true
}

//8
const getsSpeedingTicket = (milesPerHour, copIsGrouchy) => {
  if (milesPerHour > 70) {
    return copIsGrouchy || !copIsGrouchy === true
  }
  else if (70 > milesPerHour > 65) {
    return copIsGrouchy === true
  }
  else
    return copIsGrouchy || !copIsGrouchy === false
}

//9
const moreThanTwiceAsLong = (string1, string2) => {
  if (string1.length / 2 > string2.length) {
    return true
  }
  else {
    return false
  }
}

//10
const aFartherThanB = (numberA, numberB, numberC) => {
  if (Math.abs(numberA - numberC) > Math.abs(numberB - numberC)) {
    return true
  }
  else
    return false
}

//11
const firstHalf = (s) => {
  return s.substring(0, s.length / 2)
}

//12
const secondHalf = (a) => {
  return a.substring(a.length / 2, a.length)
}

//13
const upDown = (s) => {
  return s.toUpperCase() + s
}

//14
const everyOther = (s) => {
  return s[0] + s[2] + s[4]
}

//15
const upDownLastCharacter = (s) => {
  if (s.length > 0) {
  return s[s.length].toUpperCase + s(s.length) 
  }
}