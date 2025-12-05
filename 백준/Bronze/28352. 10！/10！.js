const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);

let res = 1;
for (let i = 11; i <= N; i++) {
  res *= i;
}
console.log(6 * res);
