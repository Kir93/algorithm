const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (const s of input.slice(0, -1)) {
  console.log(s.split('').reverse().join(''));
}