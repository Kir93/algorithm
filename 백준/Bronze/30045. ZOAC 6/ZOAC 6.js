const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let cnt = 0;

for (const s of input.slice(1)) {
  if (s.includes('01') || s.includes('OI')) {
    cnt++;
  }
}

console.log(cnt);
