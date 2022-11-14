// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.x * rect.y
};

const higherPaid = (e1, e2) => {
  return
};

const isSamePoint = (p1, p2) => {
  return (p1.x === p2.x) && (p1.y === p2.y)
};

const totalWithTip = (bill, tipPercentage) => {
  let result = { subtotal: bill.subtotal, tip: (bill.subtotal * tipPercentage), total: (bill + bill * subtotal) }
  return result
};

const isWinner = (player) => {
  return player.score > 100
};

const updateWins = (players) => {
};

const bigWinners = (players) => {
};

const fillTimesTable = (table) => {
  let n = 1
  for(let x = 0; x < 4; x++) {
    table[n,x] = n * x
  }
  n++
};

const sums = (n) => {
  let result = []
  for (let x = 0; x < n; x++) {
  }
};

const rule110 = (cells) => {
};
