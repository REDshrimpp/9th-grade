const factorial = (n) => {
  if (n === 0) {
    return 1
  }
  else {
    n * factorial(n - 1)
  }
}