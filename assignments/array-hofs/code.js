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
const names = (array) => {
  return array.map((n) => n.name)
}


//grades
const grades = (array) => {
  return array.map((n) => n.grade)
}


//pairs
const pairs = (array) => {
  return array.map((n) => n = [n, n])
}

//averageGrade
const averageGrade = (array) => {
  return (array.map((n) => n.grade)).reduce((tot, n) => tot + n) / array.length
}

//flatpairs
const flatpairs = (array) => {
  return array.flatMap((n) => n = [n, n])
}

//alleven
const allEven = (array) => {
  return array.every((n) => n % 2 === 0)
}

//someEven
const someEven = (array) => {
  return array.some((n) => n % 2 === 0)
}

//lengthofnames
const lengthOfNames = (array) => {
  return (array.filter((n) => n[0].toUpperCase() === n[0])).map((n) => n.length)
}