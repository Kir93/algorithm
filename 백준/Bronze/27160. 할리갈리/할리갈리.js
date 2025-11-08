const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
const cards = new Object();
let r = false;

for (let i = 1; i <= n; i++) {
  const [card, num] = input[i].split(' ');
  cards[card] = (cards[card] || 0) + parseInt(num);
}

for (const num of Object.values(cards)) {
  if (num === 5) {
    r = true;
    break;
  }
}

console.log(r ? 'YES' : 'NO');