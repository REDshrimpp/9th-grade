//EVENS

const evens = (array) => {
  return array.filter((n) => n % 2 === 0)
}


//odds
const odds = (array) => {
  return array.filter((n) => n & 2 !== 0)
}


//big
const big = (array) => {
  return array.filter((n) => n > 100)
}

//names
const names = (array) 


//grades
const grades = (array) => {
  return array.filter((n) => n.grade !== undefined)
}

/*
//pairs
const pairs = (array) => {
  return array.flatMap((n) => = [n, n])
}

//averageGrade
const averageGrade = (array) => {
  return array.reduce((total, num) => total, n)
}

//flatpairs
const flatPairs = (array) => {
  return array.flatMap
} */