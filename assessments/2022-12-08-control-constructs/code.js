const emit = (a, b, c) => console.log(a + ', ' + b + ', ' + c);

//1
const yesIfEven = (number) => {
  return number % 2 === 0
}

//2
const countXs = (string) => {
  let result = 0
  for (let x = 0; x < string.length; x++) {
    if (string[x] === 'x') {
      result++
    }
  }
  return result
}

//3 NOTE
const timesTable = (number) => {
  for (let x = 0; x < number + 1; x++) {
    for (let y = 0; y < number + 1; y++) {
      emit(x, y, x * y)
    }
  }
}

//4
const containsX = (string) => {
  for (let x = 0; x < string.length; x++) {
    if (x === 'x') {
      return true
    }
  }
}

//5
const sumSquares = (number) => {
  let result = 0
  for (let x = 0; x < number; x++) {
    result = result + x**2
  }
  return result
}