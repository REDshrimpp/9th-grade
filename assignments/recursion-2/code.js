const add = (a, b) => {
  if (b === 0) {
    return a
  }
  else {
    return 1 + add(a, b - 1)
  }
}

const multiply = (a, b) => {
  if (a === 0) {
    return 0
  }
  else if ( b === 0) {
    return 0
  }
  else {
    return a + multiply(a, b - 1)
  }
}

1 + 