const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);

for (let i = 0; i < 2 * n; i++) {
  console.log('@'.repeat(n) + '   '.repeat(n) + '@'.repeat(n));
}

for (let i = 0; i < n; i++) {
  console.log('@'.repeat(5 * n));
}

for (let i = 0; i < n; i++) {
  console.log('@'.repeat(n) + '   '.repeat(n) + '@'.repeat(n));
}

for (let i = 0; i < n; i++) {
  console.log('@'.repeat(5 * n));
}
