//count tens

/*const countTens = (array) => {
  let y = 0
  let amountOfTens = 0
  for (let x = 0; x < array.length; x++) {
    if (array[y] === 10) {
      amountOfTens++
    }
    else {
      amountOfTens = amountOfTens
    }
    y++
  }
  return amountOfTens
}
*/
//sum

const sum = (array) => {
  let total = 0
  let y = 0
  for (let x = 0; x < array.length; x++) {
    total = total + array[y]
    y++
  }
  return total
}

//evens

const evens = (array) => {
  let y = 0
  const array2 = [];
  for (let x = 0; x < array.length; x++) {
    if (array[y] % 2 === 0) {
      array2.push(array[y])
    }
    y++
  }
  return array2
}

//anyOverOneHundred

const anyOverOneHundred = (array) => {
  let y = 0
  let boolean = false
  for (let x = 0; x < array.length; x++) {
    if (array[y] > 100) {
      boolean = true
    }
    y++
  }
  return boolean
}

//pyramid

const pyramid = (nonNegativeInteger) => {
  const array = []
  for (let x = 0; x <= nonNegativeInteger; x++) {
    for (let y = 0; y < arrayPlacement; y++) {
      array.push(x)
    }
  }
  return array
}

const countTens = (array) => {
  let tenCount = 0
  for (let x = 0; x < array.length; x++) {
    if (array[x] === 10)
      tenCount++
  }
  return tenCount
}