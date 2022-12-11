// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height
};

const higherPaid = (e1, e2) => {
  return {salary: Math.max(e1.salary,e2.salary)}
};

const isSamePoint = (p1, p2) => {
  return p1.x === p2.x && p1.y === p2.y
};

const totalWithTip = (bill, tipPercentage) => {
  let result = { subtotal: bill.subtotal, tip: (bill.subtotal * tipPercentage), total: (tipPercentage * subtotal) }
  return result
};

const isWinner = (player) => {
  return player.score > 100
};

const updateWins = (players) => {
  for (let x = 0; x < players.length; x++) {
    if (isWinner(players[x])) {
      players[x].wins++
    }
  }
  return players
};

const bigWinners = (players) => {
  let result = []
  for (let x = 0; x < players.length; x++) {
    if (players[x].wins > 10) {
      result.push(players[x])
    }
  }
  return result
};

const fillTimesTable = (table) => {
  for (let x = 0; x < table.length; x++) {
    for (let y = 0; y < table[x].length; y++) {
      table[x][y] = (x + 1) * (y + 1)
    }
  }
};

const sums = (n) => {
  let result = [0]
  for (let x = 0; x < n + 1; x++) {
    result.push(x + result[x])
  }
  return result.shift
};

const rule110 = (cells) => {
  let result = []
  cells.unshift(0)
  cells.push(0)
  console.log(cells)
  for (let x = 0; x < cells.length; x++) {
    if ((cells[x - 1] === 0 && cells[x] === 0 && cells[x + 1] === 0) || (cells[x - 1] === 1 && (cells[x] === cells[x + 1]))) {
      result.push(0)
    }
    else {
      result.push(1)
    }
  }
  return result.slice()
};