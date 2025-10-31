const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const ls = input[i * 2].split(' ').map(Number);
  console.log(`${Math.min(...ls)} ${Math.max(...ls)}`);
}