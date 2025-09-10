const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < Number(input[0]); i++) {
  console.log(Math.min(...input[i + 1].split(' ').map(Number)));
}