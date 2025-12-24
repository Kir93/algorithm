const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

let x = 0;
let y = 0;

for (const winner of input) {
  if (winner === 'D') {
    x += 1;
  } else {
    y += 1;
  }
  if (Math.abs(x - y) >= 2) {
    break;
  }
}

console.log(`${x}:${y}`);
