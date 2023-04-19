const add = (a, b) => {
  if (b === 0) {
    return a
  }
  else {
    return 1 + add(a, b - 1)
  }
}

const multiply = (a, b) => {
  if (a === 0 || b === 0) {
    return 0
  }
  else {
    return a + multiply(a, b - 1)
  }
}

const double = (a, b) => {
  if (b === 0) {
    return a
  }
  else {
    return 2 * double(a, b - 1)
  }
}

const triple = (a, b) => {
  if (b === 0) {
    return a
  }
  else {
    return 3 * triple(a, b - 1)
  }
}

const power = (a, b) => {
  if (b === 0) {
    return 1
  }
  else {
    return a * power(a, b - 1)
  }
}

const deleteXs = (string) => {
  if (string.length === 0) {
    return ''
  }
  if (string[0] === 'x') {
    return deleteXs(string.slice(1))
  }
  else if (string[0] !== 'x') {
    return string[0] + deleteXs(string.slice(1))
  }
}

const countXs = (string) => {
  if (string.length === 0) {
    return 0
  }
  else if (string[0] === 'x') {
    return 1 + (countXs(string.slice(1)))
  }
  else {
    return countXs(string.slice(1))
  }
}

const maximum = (array) => {
  if (array.length === 0) {
    return -Infinity
  }
  else if (array.length === 1) {
    return array[0]
  }
  else if (array[0] > maximum(array.slice(1))) {
    return array[0]
  }
}