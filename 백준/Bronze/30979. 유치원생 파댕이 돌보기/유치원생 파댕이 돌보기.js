const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
const F = input[2]
  .split(' ')
  .map(Number)
  .reduce((acc, curr) => acc + curr, 0);

if (T <= F) {
  console.log('Padaeng_i Happy');
} else {
  console.log('Padaeng_i Cry');
}
