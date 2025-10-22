const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);

for (let i = 0; i < n; i++) {
  const a = input[i * 2 + 1].split(' ').map(Number).slice(1);
  const b = input[i * 2 + 2].split(' ').map(Number).slice(1);

  const countA = Array(5).fill(0);
  const countB = Array(5).fill(0);

  a.forEach((n) => countA[n]++);
  b.forEach((n) => countB[n]++);

  let result = 'D';

  for (let i = 4; i >= 1; i--) {
    if (countA[i] !== countB[i]) {
      result = countA[i] > countB[i] ? 'A' : 'B';
      break;
    }
  }

  console.log(result);
}