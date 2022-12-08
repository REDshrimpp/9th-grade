const emit = (a, b) => console.log(a + ', ' + b);

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

//3
const timesTable = (number) => {
  for (let x = 0; x < number; x++) {
    for (let y = 0; y < number; y++) {
      console.log(x)
      emit(x, y)
    }
  }
}