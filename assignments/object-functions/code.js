//getX
const getX = (object) => {
  return object.x
}

//point
const point = (x, y) => {
  return { x, y }
}

//emptyObject
const emptyObject = () => {
  return {}
}

//distance
const distance = (p1, p2) => {
  return Math.sqrt(Math.abs(p1.x - p2.x) ** 2 + Math.abs(p1.y - p2.y) ** 2)
}

//mid point
const midpoint = (p1, p2) => {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2
  }
}

//sum salaries
const sumSalaries = (workers) => {
  let result = 0
  for (let x = 0; x < workers.length; x++) {
    result = result + workers[x].salary
  }
  return result
}

//new high score
const newHighScore = (currentHighScore, players) => {
  let highScore = currentHighScore
  for (let x = 0; x < players.length; x++) {
    if (players[x].score > highScore) {
      highScore = players[x].score
    }
  }
  return highScore
}

//summarize books
const summarizeBooks = (books) => {
  let result = { titles: [], pages: 0 }
  for (let x = 0; x < books.length; x++) {
    result.pages = result.pages + books[x].pages
  }
  for (let x = 0; x < books.length; x++) {
    result.titles.push(books[x].title)
  }
  return result
}