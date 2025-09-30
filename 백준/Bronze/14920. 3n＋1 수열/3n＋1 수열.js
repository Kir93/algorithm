const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let c = 1;
let n = parseInt(input[0], 10);

while (n !== 1) {
  n = n % 2 === 0 ? parseInt(n / 2, 10) : 3 * n + 1;
  c += 1;
}

console.log(c);