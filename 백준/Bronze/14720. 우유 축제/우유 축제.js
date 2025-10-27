const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const ls = input[1].split(' ').map(Number);
let before = -1;
let r = 0;

for (m of ls) {
  if (before === -1 && m === 0) {
    r += 1;
    before = 0;
  } else if (before === 0 && m === 1) {
    r += 1;
    before = 1;
  } else if (before === 1 && m === 2) {
    r += 1;
    before = 2;
  } else if (before === 2 && m === 0) {
    r += 1;
    before = 0;
  }
}

console.log(r);