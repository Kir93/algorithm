const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const a = input[1]
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);
const b = input[2]
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);
let cnt = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] <= b[i]) cnt++;
}

console.log(cnt);
