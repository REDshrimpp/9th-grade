const countTens = (array) => {
  let y = 0
  let amountOfTens = 0
  for (let x = 0; x < array.length; x = x + 1) {
    if (array[y] === 10) {
      amountOfTens++
    }
    else
      amountOfTens = amountOfTens
  }
  return amountOfTens
}