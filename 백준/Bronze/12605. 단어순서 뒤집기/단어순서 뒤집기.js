const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);

for (let i = 0; i < n; i++) {
  console.log(`Case #${i + 1}: ${input[i + 1].split(' ').reverse().join(' ')}`);
}