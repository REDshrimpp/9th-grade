//1 NOTE
const makeRow = () => {
  let result = ['', '', '']
  return result
}

//2
const makeBoard = () => {
  return [makeRow(), makeRow(), makeRow()]
}

//3
const makeMove = (mark, row, collumn) => {
  return {mark: mark, row: row, collumn: collumn}
}