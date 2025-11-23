const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = 'ignore';
let prev_n = -1;

for (let i = 0; i < input.length; i++) {
  const n = parseInt(input[i], 10);
  if (answer === 'answer') {
    continue;
  }
  if (i === 1) {
    prev_n = n;
  }
  if (i === 2 && n !== prev_n) {
    answer = 'answer';
  }
  if (i === 0 && n !== 8 && n !== 9) {
    answer = 'answer';
  }
  if (i === 3 && n !== 8 && n !== 9) {
    answer = 'answer';
  }
}

console.log(answer);
