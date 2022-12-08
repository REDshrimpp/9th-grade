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