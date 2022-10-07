// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

//1
const itemsLeftOver = (numberOfPeople, numberOfItems) => {
  return numberOfItems % numberOfPeople
}

//2
const areaOfCircle = (radius) => {
  return Math.PI * (radius ** 2)
}

//3
const volumeOfCube = (edgeLength) => {
  return edgeLength ** 3
}

//4
const populationGrowth = (currentPopulation, growthRate) => {
  return currentPopulation + currentPopulation * growthRate
}

//5
const earnedRunAverage = (numberOfEarnedRuns, numberOfInningsPitched) => {
  return numberOfEarnedRuns / numberOfInningsPitched * 9
}

//6
const valueOfJewels = (numberOfDiamonds, numberOfEmeralds, diamondValue, emeraldValue) => {
  return numberOfDiamonds * diamondValue + numberOfEmeralds * emeraldValue
}

//7
const payWithOverTime = (numberOfHours, hourlyPay, overTimePay) => {
  if (numberOfHours < 8) {
    return numberOfHours * hourlyPay
  }
  else {
    return (hourlyPay * 8) + (numberOfHours - 8) * overTimePay
  }
}