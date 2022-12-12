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

//4
const placeMark = (board, move) => {
  board[move.row][move.collumn] = move.mark
}

//5
const allTheSame = (arrayOfElements) => {
  return (arrayOfElements[0] === arrayOfElements[1]) === arrayOfElements[2]
}