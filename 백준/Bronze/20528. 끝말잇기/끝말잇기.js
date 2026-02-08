const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
const pal = input[1].trim().split(' ');
const a = pal[0][0];

let ans = 1;

for (let i = 1; i < n; i++) {
  if (pal[i][0] != a) {
    ans = 0;
    break;
  }
}

console.log(ans);
