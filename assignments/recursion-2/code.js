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
    return triple(a * 3, b - 1)
  }
}

const power = (a, b) => {
  if (b === 1) {
    return a
  }
  if (b === 0) {
    return 1
  }
  else {
    return a * power(a, b - 1)
  }
}