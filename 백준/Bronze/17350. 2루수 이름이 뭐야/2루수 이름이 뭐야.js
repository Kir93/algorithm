const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
let yn = 0;

for (let i = 0; i < N; i++) {
  if (input[i + 1] === 'anj') {
    yn = 1;
    break;
  }
}

console.log(yn === 1 ? '뭐야;' : '뭐야?');
