const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [x, n] = input[0].split(' ').map(Number);

for (let i = 0; i < n; i++) {
  if (x % 2 === 0) {
    x = (x / 2) ^ 6;
  } else {
    x = (2 * x) ^ 6;
  }
}

console.log(x);
