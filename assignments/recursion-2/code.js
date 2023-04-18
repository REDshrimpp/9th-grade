const add = (a, b) => {
  if (b === 0) {
    return a
  }
  else {
    return 1 + add(a, b - 1)
  }
}

const multiply = (a, b) => {
  if (b || a === 0) {
    return 0
  }
  else {
    console.log(a + multiply(a, b-1))
    return a + multiply(a, b - 1)
  }
}