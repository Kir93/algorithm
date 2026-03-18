const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);

for (let i = 0; i < n; i++) {
  console.log('@@@@@'.repeat(n));
}

for (let j = 0; j < n * 4; j++) {
  console.log('@'.repeat(n));
}
