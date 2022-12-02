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
  return !hasBlueHead
}

//5
const okaySpeed = (speedLimit, carSpeed) => {
  return (carSpeed > speedLimit - 10) && (carSpeed < speedLimit + 10)
}

//6

//7

//8