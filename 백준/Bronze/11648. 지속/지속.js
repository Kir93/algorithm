const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = input[0];
let cnt = 0;

while (n.length > 1) {
  let res = 1;
  for (let i = 0; i < n.length; i++) {
    res *= Number(n[i]);
  }
  n = res.toString();
  cnt++;
}

console.log(cnt);
