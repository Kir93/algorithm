const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let l = parseInt(input[0]);
let i = 5;
let c = 0;

while (l > 0) {
  c += Math.floor(l / i);
  l %= i;
  i -= 1;
}

console.log(c);
