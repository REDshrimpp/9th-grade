//EVENS

const evens = (array) => {
  return array.filter(n % 2 === 0)
}

//odds
const odds = (array) => {
  return array.filter(n & 2 !== 0)
}

//big
const big = (array) => {
  return array.filter(n > 100)
}

//grades
const grades = (array) => {
  return array.filter(n.grade !== undefined)
}

//pairs
const pairs = (array) => {
  return array.flatmap((n) = [n, n])
}

//