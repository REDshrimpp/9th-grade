//count tens
const countTens = (array) => {
  let tenCount = 0
  for (let x = 0; x < array.length; x++) {
    if (array[x] === 10)
      tenCount++
  }
  return tenCount
}

//sum

const sum = (array) => {
  let total = 0
  for (let x = 0; x < array.length; x++) {
    total = total + array[x]
  }
  return total
}

//evens

const evens = (array) => {
  let y = 0
  const result = [];
  for (let x = 0; x < array.length; x++) {
    if (array[y] % 2 === 0) {
      result.push(array[y])
    }
    y++
  }
  return result
}

//anyOverOneHundred

const anyOverOneHundred = (array) => {
  let found = false
  for (let x = 0; x < array.length; x++) {
    if (array[x] > 100) {
      found = true
    }
  }
  return found
}

//pyramid

const pyramid = (nonNegativeInteger) => {
  let array = []
  const arrayPlacement = array.length
  for (let x = 0; x <= nonNegativeInteger; x++) {
    for (let y = 0; y < arrayPlacement; y++) {
      array.push(x)
    }
  }
  return array
}