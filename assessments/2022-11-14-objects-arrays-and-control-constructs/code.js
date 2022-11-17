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
  let result = {subtotal: bill.subtotal, tip: (bill.subtotal * tipPercentage), total: (tipPercentage * subtotal) }
  return result
};

const isWinner = (player) => {
  return player.score > 100
};

const updateWins = (players) => {
  for(let x = 0; x < players.length; x++) {
    if (players[x].score > 100) {
      players[x].wins++
    }
  }
  return players
};

const bigWinners = (players) => {
};

const fillTimesTable = (table) => {
  for(let y = 0; y < table.length; y++) {
  for(let x = 0; x < table[y].length; x++) {
    table[y][x] = n * x
  }
  }
  return table
};

const sums = (n) => {
  let result = []
  for (let x = 0; x < n; x++) {
  }
};

const rule110 = (cells) => {
};
