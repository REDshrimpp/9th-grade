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
    return double(a * 2, b - 1)
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
  if (b === 0) {
    return a
  }
  else {
    return power(a * a, b - 1)
  }
}