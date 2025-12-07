const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, S] = input;

let score = 0;
let bonus = 0;

for (let i = 0; i < N; i++) {
  if (S[i] === 'O') {
    score += i + 1 + bonus;
    bonus++;
  } else {
    bonus = 0;
  }
}

console.log(score);
