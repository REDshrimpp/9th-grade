const evens = (numbers) => {
  let result = []
  for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] % 2 === 0) {
      result.push(numbers[x])
    }
  }
  return result
}