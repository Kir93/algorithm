const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const [K, X] = input[1].split(' ').map(Number);

let cnt = 0;

for (let i = K - X; i <= K + X; i++) {
  if (i >= A && i <= B) {
    cnt++;
  }
}

console.log(cnt === 0 ? 'IMPOSSIBLE' : cnt);
