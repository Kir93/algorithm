const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, x] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);

let r = Infinity;

for (let i = 1; i < n; i++) {
  const c = a[i - 1] * x + a[i] * x;
  if (r > c) {
    r = c;
  }
}

console.log(r);
