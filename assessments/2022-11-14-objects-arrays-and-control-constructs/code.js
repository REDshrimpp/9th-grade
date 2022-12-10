// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height
};

const higherPaid = (e1, e2) => {
  return
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
  for (let x = 0; x < n; x++) {
    result.push(x + result[x])
  }
  return result
};

const rule110 = (cells) => {
};
