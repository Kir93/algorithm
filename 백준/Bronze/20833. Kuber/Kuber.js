const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
let cube = 0;

for (let i = 1; i <= n; i++) {
  cube += i * i * i;
}

console.log(cube);
