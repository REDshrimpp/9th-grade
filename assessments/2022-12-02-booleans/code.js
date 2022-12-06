//1
const needHeavyCoat = (goingOutside, somewhereCold) => {
  return goingOutside && somewhereCold
}

//2
const needSunscreen = (goingToBeach, goingSkiing) => {
  return goingToBeach || goingSkiing
}

//3
const needMittens = (goingOutside, somewhereWarm) => {
  return goingOutside && !somewhereWarm
}

//4 NOTE
const isVenomous = (isStriped, hasBlueHead) => {
return isStriped && !hasBlueHead
}

//5
const okaySpeed = (speedLimit, carSpeed) => {
  return (carSpeed > speedLimit - 11) && (carSpeed < speedLimit + 11)
}

//6
const twiceAsExpensive = (item1Price, item2Price) => {
  return item1Price > item2Price * 2
}

//7
const winningRecord = (wins, losses, ties) => {
  return wins > losses + ties
}

//8
const isMagicNumber = (number) => {
  return number === 42 || number === 17
}

// 42 is the meaning of life