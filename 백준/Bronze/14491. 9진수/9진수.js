const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);
let res = '';
let t = 0;

while (9 ** t <= n) {
  t++;
}

for (let i = t - 1; i >= 0; i--) {
  res += String(Math.floor(n / 9 ** i));
  n = n % 9 ** i;
}

console.log(res);
