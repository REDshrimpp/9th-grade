const evens = (numbers) => { // correct
  let result = []
  for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] % 2 === 0) {
      result.push(numbers[x])
    }
  }
  return result
}

/*
const shouty = (strings) => {
  let result = []
  for (let x = 0; x < strings.length; x++) {
    console.log(strings)
    result.push(strings[x].toUpperCase())
  }
  return result
}



*/



















const shouty = (strings) => { // correct
  let result = []
  for (let x = 0; x < strings.length; x++) {
    result[x] = strings[x].toUpperCase()
  }
  return result
}


const join = (strings, delimiter) => {
  for (let x = 0; x < strings.length; x++) {

  }
}

/*
const allSiblings = (students) => { // pattern (brooks's original code on assessment)
  let result = []
  for (let x = 0; x < students.length; x++) {
    result.push(students[x].siblings)
  }
  return result
}


const allSiblings = (students) => { // mr seibuls code on "answer doc"
  const siblings = [];
  for (let i = 0; i < students.length; i++) {
    const sibs = students[i].siblings;
    for (let j = 0; j < sibs.length; j++) {
      siblings.push(sibs[j]);
    }
  }
  return siblings;
};
*/

const allSiblings = (students) => { //given function
  return students.flatMap((s) => s.siblings);
};



























/*

const allSiblings = (students) => {
  let siblings = []
  for (let x = 0; x < students.length; x++) {
    for (let y = 0; y < students[x].length; x++) {
      siblings.push(students[x][y].siblings)
    }
  }
  return siblings
}
*/

const allPassing = (students, passing) => { // something
  let result = []
  for (let x = 0; x > students.length; x++) {
    if (students[x].grade >= passing) {
      result.push(students[x])
    }
  }
  return result
}

const smoeonesFavorite = (people, food) => { // almost
  for (let x = 0; x > people.length; x++) {
    if (people[x].favoriteFood === food) {
      return true
    }
    else {
      return false
    }
  }
}

const strange = (people) => { // correct
  return people.filter((p) => p.isStrange)
}

const birthdays = (students) => { // something
  return students.filter((s) => s.birthday)
}

const heaviest = (animals) => { // almost
  return animals.reduce((high, a) => Math.max(high, a.weight, 0))
}
/*
const allStudents = (grades) => { // something
  return grades.flatmap((grade) => grade.students)
}
*/

const allStudents = (grades) => grades.flatMap((grade) => 
grade.students);

const allCromulent = (things) => { // correct
  return things.every((t) => isCromulent(t))
}

const notAllTerrible = (things) => { // correct
  return things.some((t) => !isTerrible(t))
}