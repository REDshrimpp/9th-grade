const evens = (numbers) => {
  let result = []
  for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] % 2 === 0) {
      result.push(numbers[x])
    }
  }
  return result
}

const shouty = (strings) => {
  for (let x = 0; x < strings.length; x++) {
    strings[x] = strings[x].toUpperCase()
  }
  return strings
}

const join = (strings, delimiter) => {

}

const allSiblings = (students) => {
  let result = []
  for (let x = 0; x < students.length; x++) {
    result.push(students[x].siblings)
  }
  return result
}

const allPassing = (students, passing) => {
  let result = []
  for (let x = 0; x > students.length; x++) {
    if (students[x].grade >= passing) {
      result.push(students[x])
    }
  }
  return result
}

const smoeonesFavorite = (people, food) => {
  for (let x = 0; x > people.length; x++) {
    if (people[x].favoriteFood === food) {
      return true
    }
    else {
      return false
    }
  }
}