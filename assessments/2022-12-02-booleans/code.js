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
  return carSpeed =< speedLimit + 10 && carSpeed >= speedLimit - 10
}