const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
const cards = input[1].split(' ').map(Number);

let result = [];
let tmp = [];

for (let i = 0; i < n; i++) {
  tmp.push(cards[i]);

  if (cards[i + 1] - cards[i] !== 1) {
    result.push(tmp);
    tmp = [];
  }
}

console.log(result.reduce((acc, curr) => acc + curr[0], 0));
