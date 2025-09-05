const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const [c, k, p] = input.map(Number);
let r = 0;

for (let i = 1; i <= c; i++) {
  r += k * i + p * i * i;
}

console.log(r);