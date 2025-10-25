const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
const cows = Array(n + 1).fill(0);
const now = Array(n + 1).fill(-1);

for (let i = 1; i <= n; i++) {
  const [idx, location] = input[i].split(' ').map(Number);
  if (now[idx] === -1) {
    now[idx] = location;
  } else if (now[idx] !== location) {
    cows[idx] += 1;
    now[idx] = location;
  }
}

console.log(cows.reduce((a, b) => a + b, 0));