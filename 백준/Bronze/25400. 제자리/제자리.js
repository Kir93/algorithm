const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const ls = input[1].split(' ').map(Number);
let k = 1;
let cnt = 0;

for (let j of ls) {
  if (j == k) {
    k++;
  } else {
    cnt++;
  }
}

console.log(cnt);
