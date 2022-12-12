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
const makeMove = (mark, row, column) => {
  return {mark: mark, row: row, column: column}
}

//4
const placeMark = (board, move) => {
  board[move.row][move.column] = move.mark
}

//5
const allTheSame = (arrayOfElements) => {
  return arrayOfElements[0] === arrayOfElements[1] && arrayOfElements[0] === arrayOfElements[2]
}

//6
const extractColumn = (board, index) => {
  return [board[0][index], board[1][index], board[2][index]]
}

//7
const recordMove = (array, move) => {
  array.push(move)
  return array
}

//8