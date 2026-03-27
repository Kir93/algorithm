const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = 0;
let x = parseInt(input[0]);
let y = input[1].trim();

while (n < y.length) {
  process.stdout.write(y[n]);
  n += x;
}
