const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0], 10);

for (let i = 1; i <= Math.floor(Math.sqrt(n)) + 1; i++) {
  if (1 + i + i ** 2 === n) {
    console.log(i);
    break;
  }
}